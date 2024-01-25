'use server'
import prisma from "@/modules/_global/bin/prisma";
import { funGetOneCandidateFront } from "@/modules/candidate";
import { funGetUserDefaultFront } from "@/modules/user";
import _ from "lodash";

export default async function funGetPairingRegional({ candidate1, candidate2 }: { candidate1?: any, candidate2?: any }) {
    let dataCandidate, persen = <any>[], data = <any>[], result = <any>[]
    const def = await funGetUserDefaultFront()

    if (!_.isNull(candidate1) && !_.isNull(candidate2) && !_.isUndefined(candidate1) && !_.isUndefined(candidate2)) {
        const dataC1 = await funGetOneCandidateFront({ candidate: candidate1 })
        const dataC2 = await funGetOneCandidateFront({ candidate: candidate2 })

        dataCandidate = {
            tingkat: dataC1?.tingkat,
            idCandidate1: dataC1?.id,
            nameCandidate1: dataC1?.name,
            imgCandidate1: dataC1?.img,
            idCandidate2: dataC2?.id,
            nameCandidate2: dataC2?.name,
            imgCandidate2: dataC2?.img
        }
    } else {
        const dataCandidatePairing = await prisma.candidatePairing.findFirst({
            where: {
                Candidate1: {
                    isActive: true,
                    idProvinsi: Number(def.idProvinsi),
                    idKabkot: def.idKabkot,
                    tingkat: def.tingkat
                },
                Candidate2: {
                    isActive: true,
                    idProvinsi: Number(def.idProvinsi),
                    idKabkot: def.idKabkot,
                    tingkat: def.tingkat
                },
                dateEmotion: new Date()
            },
            select: {
                rate: true,
                Candidate1: {
                    select: {
                        name: true,
                        id: true,
                        img: true,
                    }
                },
                Candidate2: {
                    select: {
                        name: true,
                        id: true,
                        img: true,
                    }
                }
            },
            orderBy: {
                rate: 'desc'
            }
        })

        dataCandidate = {
            tingkat: def.tingkat,
            idCandidate1: dataCandidatePairing?.Candidate1.id,
            nameCandidate1: dataCandidatePairing?.Candidate1.name,
            imgCandidate1: dataCandidatePairing?.Candidate1.img,
            idCandidate2: dataCandidatePairing?.Candidate2.id,
            nameCandidate2: dataCandidatePairing?.Candidate2.name,
            imgCandidate2: dataCandidatePairing?.Candidate2.img
        }
    }

    if (!_.isUndefined(dataCandidate.idCandidate1) && !_.isUndefined(dataCandidate.idCandidate2)) {
        data = await prisma.candidatePairing.findMany({
            where: {
                idCandidate1: dataCandidate.idCandidate1,
                idCandidate2: dataCandidate.idCandidate2,
                dateEmotion: new Date()
            },
            select: {
                rate: true,
                confidence: true,
                dissapproval: true,
                negative: true,
                positive: true,
                supportive: true,
                uncomfortable: true,
                undecided: true,
                unsupportive: true,
                idProvinsi: true,
                idKabkot: true,
                idKecamatan: true,
                AreaKabkot: {
                    select: {
                        name: true,
                    }
                },
                AreaKecamatan: {
                    select: {
                        name: true,
                    }
                }
            }
        })

        if (dataCandidate.tingkat == 1) {
            const dataOmit = data.map((v: any) => ({
                ..._.omit(v, ["AreaKabkot", "AreaKecamatan"]),
                name: v.AreaKabkot?.name,
                idArea: v.idKabkot
            }))

            result = _.map(_.groupBy(dataOmit, "idKabkot"), (v: any) => ({
                name: _.toString(v[0].name),
                idArea: v[0].idArea,
                confidence: _.sumBy(v, 'confidence'),
                dissapproval: _.sumBy(v, 'dissapproval'),
                negative: _.sumBy(v, 'negative'),
                positive: _.sumBy(v, 'positive'),
                supportive: _.sumBy(v, 'supportive'),
                uncomfortable: _.sumBy(v, 'uncomfortable'),
                undecided: _.sumBy(v, 'undecided'),
                unsupportive: _.sumBy(v, 'unsupportive'),
                filtered: _.sum([
                    _.sumBy(v, 'confidence'),
                    _.sumBy(v, 'dissapproval'),
                    _.sumBy(v, 'negative'),
                    _.sumBy(v, 'positive'),
                    _.sumBy(v, 'supportive'),
                    _.sumBy(v, 'uncomfortable'),
                    _.sumBy(v, 'undecided'),
                    _.sumBy(v, 'unsupportive'),
                ])
            }))

        } else {
            const dataOmit = data.map((v: any) => ({
                ..._.omit(v, ["AreaKabkot", "AreaKecamatan"]),
                name: v.AreaKecamatan?.name,
                idArea: v.idKecamatan
            }))

            result = _.map(_.groupBy(dataOmit, "idKecamatan"), (v: any) => ({
                name: _.toString(v[0].name),
                idArea: v[0].idArea,
                confidence: _.sumBy(v, 'confidence'),
                dissapproval: _.sumBy(v, 'dissapproval'),
                negative: _.sumBy(v, 'negative'),
                positive: _.sumBy(v, 'positive'),
                supportive: _.sumBy(v, 'supportive'),
                uncomfortable: _.sumBy(v, 'uncomfortable'),
                undecided: _.sumBy(v, 'undecided'),
                unsupportive: _.sumBy(v, 'unsupportive'),
                filtered: _.sum([
                    _.sumBy(v, 'confidence'),
                    _.sumBy(v, 'dissapproval'),
                    _.sumBy(v, 'negative'),
                    _.sumBy(v, 'positive'),
                    _.sumBy(v, 'supportive'),
                    _.sumBy(v, 'uncomfortable'),
                    _.sumBy(v, 'undecided'),
                    _.sumBy(v, 'unsupportive'),
                ])
            }))
        }

        persen = result.map((v: any) => ({
            name: v.name,
            idArea: v.idArea,
            confidence: _.round((Number(v.confidence) / v.filtered) * 100, 2),
            dissapproval: _.round((Number(v.dissapproval) / v.filtered) * 100, 2),
            negative: _.round((Number(v.negative) / v.filtered) * 100, 2),
            positive: _.round((Number(v.positive) / v.filtered) * 100, 2),
            supportive: _.round((Number(v.supportive) / v.filtered) * 100, 2),
            uncomfortable: _.round((Number(v.uncomfortable) / v.filtered) * 100, 2),
            undecided: _.round((Number(v.undecided) / v.filtered) * 100, 2),
            unsupportive: _.round((Number(v.unsupportive) / v.filtered) * 100, 2),
        }))

    }

    const allData = {
        candidate: dataCandidate,
        rate: data[0]?.rate,
        chart: persen
    }

    return allData
}