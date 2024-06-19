"use server"

import prisma from "../../bin/prisma"
import _ from "lodash"

export default async function funGetAreaKabKotByProvinsi({ idProvinsi }: { idProvinsi: any }) {
    const data = await prisma.userArea.findMany({
        where: {
            idProvinsi: idProvinsi,
            isActive: true
        },
        select: {
            idKabkot: true,
            AreaKabkot: {
                select: {
                    name: true
                }
            }
        }
    })

    const allData = data.map((v: any) => ({
        ..._.omit(v, ["name"], ["idKabKot"]),
        idKabkot: v.idKabkot,
        name: v.AreaKabkot?.name
    }))

    return allData
}