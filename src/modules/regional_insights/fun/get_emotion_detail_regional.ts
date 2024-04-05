'use server'
import { funGetOneKabkot, funGetOneKecamatan } from "@/modules/_global"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetEmotionDetailRegional({ candidate, area }: { candidate: any, area: any }) {
    let result = null, dataArea

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        const data = await prisma.candidateEmotion.findMany({
            where: {
                dateEmotion: new Date(),
                idCandidate: candidate,
                isActive: true,
                idKabkot: Number(area)
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
                idKecamatan: true,
                AreaKecamatan: {
                    select: {
                        name: true
                    }
                }
            }
        })

        const format = data.map((v: any) => ({
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

        dataArea = await funGetOneKabkot({ id: area })

    } else if (dataC?.tingkat == 2) {
        const data = await prisma.candidateEmotion.findMany({
            where: {
                dateEmotion: new Date(),
                idCandidate: candidate,
                isActive: true,
                idKecamatan: Number(area)
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
                idKelurahan: true,
                AreaKelurahan: {
                    select: {
                        name: true
                    }
                }
            }
        })

        const format = data.map((v: any) => ({
            ..._.omit(v, ["AreaKelurahan"]),
            name: v.AreaKelurahan.name
        }))

        result = _.map(_.groupBy(format, "idKelurahan"), (v: any) => ({
            name: _.toString(v[0].name),
            id: v[0].idKelurahan,
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

        dataArea = await funGetOneKecamatan({ id: area })
    }

    const allData = {
        area: dataArea?.name,
        data: result
    }

    return allData

}