'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetRateChart({ candidate1, candidate2, startDate, endDate }: { candidate1: any, candidate2: any, startDate: any, endDate: any }) {

    if (!_.isUndefined(candidate1) && !_.isUndefined(candidate2)) {
        const data = await prisma.candidatePairing.findMany({
            where: {
                idCandidate1: candidate1,
                idCandidate2: candidate2,
                dateEmotion: {
                    gte: new Date(startDate),
                    lte: new Date(endDate),
                }
            },
            orderBy: {
                dateEmotion: 'asc'
            }
        })

        const dataGroup = _.map(_.groupBy(data, "dateEmotion"), (v: any) => ({
            dateEmotion: v[0].dateEmotion,
            rate: v[0].rate
        }))

        return dataGroup
    } else {
        return []
    }

}