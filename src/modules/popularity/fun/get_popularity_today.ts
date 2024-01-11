'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetOneCandidateFront } from "@/modules/candidate"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from 'lodash'

export default async function funGetPopularityToday({ candidate1, candidate2 }: { candidate1?: any, candidate2?: any }) {
    let dataCandidate
    const def = await funGetUserDefaultFront()

    if (!_.isNull(candidate1) && !_.isNull(candidate2) && !_.isUndefined(candidate1) && !_.isUndefined(candidate2)) {
        const dataC1 = await funGetOneCandidateFront({ candidate: candidate1 })
        const dataC2 = await funGetOneCandidateFront({ candidate: candidate2 })

        dataCandidate = {
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
            idCandidate1: dataCandidatePairing?.Candidate1.id,
            nameCandidate1: dataCandidatePairing?.Candidate1.name,
            imgCandidate1: dataCandidatePairing?.Candidate1.img,
            idCandidate2: dataCandidatePairing?.Candidate2.id,
            nameCandidate2: dataCandidatePairing?.Candidate2.name,
            imgCandidate2: dataCandidatePairing?.Candidate2.img
        }
    }

    const data = await prisma.candidatePairing.findMany({
        where: {
            idCandidate1: dataCandidate.idCandidate1,
            idCandidate2: dataCandidate.idCandidate2,
            dateEmotion: new Date()
        }
    })

    const format = _.map(_.groupBy(data, "idProvinsi"), (v: any) => ({
        rate: v[0].rate,
        confidence: _.sumBy(v, 'confidence'),
        dissapproval: _.sumBy(v, 'dissapproval'),
        negative: _.sumBy(v, 'negative'),
        positive: _.sumBy(v, 'positive'),
        supportive: _.sumBy(v, 'supportive'),
        uncomfortable: _.sumBy(v, 'uncomfortable'),
        undecided: _.sumBy(v, 'undecided'),
        unsupportive: _.sumBy(v, 'unsupportive'),
        total: _.sum([
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

    const persen = {
        confidence: Number(((format[0].confidence / format[0].total) * 100).toFixed(2)),
        dissapproval: Number(((format[0].dissapproval / format[0].total) * 100).toFixed(2)),
        negative: Number(((format[0].negative / format[0].total) * 100).toFixed(2)),
        positive: Number(((format[0].positive / format[0].total) * 100).toFixed(2)),
        supportive: Number(((format[0].supportive / format[0].total) * 100).toFixed(2)),
        uncomfortable: Number(((format[0].uncomfortable / format[0].total) * 100).toFixed(2)),
        undecided: Number(((format[0].undecided / format[0].total) * 100).toFixed(2)),
        unsupportive: Number(((format[0].unsupportive / format[0].total) * 100).toFixed(2)),
    }

    const allData = {
        pairingCandidate: dataCandidate,
        rate: format[0].rate,
        chart: persen
    }

    return allData

}