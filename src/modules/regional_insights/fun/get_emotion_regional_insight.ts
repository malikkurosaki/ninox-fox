'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"

export default async function funGetEmotionRegionalInsight({ candidate }: { candidate?: any }) {
    const def = await funGetUserDefaultFront()
    const can = await prisma.candidate.findFirst({
        where: {
            isActive: true,
            idProvinsi: Number(def.idProvinsi),
            idKabkot: def.idKabkot,
            tingkat: def.tingkat
        },
        select: {
            id: true,
        },
        orderBy: {
            name: 'asc'
        }
    })

    let candidateReal = null, format, result = null

    if (candidate == null) {
        candidateReal = can?.id
    } else {
        candidateReal = candidate
    }

    if (candidateReal == null) {
        return null
    } else {
        const dataC = await prisma.candidate.findUnique({
            where: {
                id: candidateReal,
                isActive: true,
            }
        })

        const data = await prisma.candidateEmotion.findMany({
            where: {
                dateEmotion: new Date(),
                idCandidate: candidateReal,
                isActive: true,
            },
            select: {
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
                AreaKabkot: {
                    select: {
                        name: true,
                    }
                },
                idKecamatan: true,
                AreaKecamatan: {
                    select: {
                        name: true
                    }
                }
            }
        })

        if (dataC?.tingkat == 2) {
            format = data.map((v: any) => ({
                ..._.omit(v, ["AreaKecamatan"]),
                name: v.AreaKecamatan.name
            }))

            result = _.map(_.groupBy(format, "idKecamatan"), (v: any) => ({
                name: _.toString(v[0].name),
                id: v[0].idKecamatan,
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

        } else if (dataC?.tingkat == 1) {
            format = data.map((v: any) => ({
                ..._.omit(v, ["AreaKabkot"]),
                name: v.AreaKabkot.name
            }))

            result = _.map(_.groupBy(format, "idKabkot"), (v: any) => ({
                name: _.toString(v[0].name),
                id: v[0].idKabkot,
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

        return result
    }
}