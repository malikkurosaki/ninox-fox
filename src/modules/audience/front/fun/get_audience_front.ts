'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"

export default async function funGetAudienceFront() {
    let result = null

    const def = await funGetUserDefaultFront()
    if (def.tingkat == 1) {
        const data = await prisma.audience.findMany({
            where: {
                idProvinsi: def.idProvinsi
            }
        })

        result = _.map(_.groupBy(data, "idKabkot"), (v: any) => ({
            idArea: v[0].idKabkot,
            value: _.sumBy(v, 'value'),
        }))

    } else if (def.tingkat == 2) {
        const data = await prisma.audience.findMany({
            where: {
                idKabkot: def.idKabkot
            }
        })

        result = _.map(_.groupBy(data, "idKecamatan"), (v: any) => ({
            idArea: v[0].idKecamatan,
            value: _.sumBy(v, 'value'),
        }))
    }

    return result
}