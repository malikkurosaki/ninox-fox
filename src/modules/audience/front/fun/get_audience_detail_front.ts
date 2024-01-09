'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetAudienceDetailFront({ candidate, area }: { candidate: any, area: any }) {
    let result = null

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        const data = await prisma.audience.findMany({
            where: {
                idKabkot: Number(area)
            }
        })

        result = _.map(_.groupBy(data, "idKecamatan"), (v: any) => ({
            idArea: v[0].idKecamatan,
            value: _.sumBy(v, 'value'),
        }))
    } else if (dataC?.tingkat == 2) {
        const data = await prisma.audience.findMany({
            where: {
                idKecamatan: Number(area)
            }
        })

        result = _.map(_.groupBy(data, "idKelurahan"), (v: any) => ({
            idArea: v[0].idKelurahan,
            value: _.sumBy(v, 'value'),
        }))
    }

    return result
}