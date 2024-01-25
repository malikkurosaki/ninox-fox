'use server'
import { funGetUserDefaultFront } from "@/modules/user"
import prisma from "../bin/prisma"
import _ from "lodash"

export default async function funGetAreaByDefault() {
    let data = <any>[]
    const def = await funGetUserDefaultFront()

    if (def) {
        if (def.tingkat == 1) {
            data = await prisma.areaKabkot.findMany({
                where: {
                    idProvinsi: Number(def.idProvinsi),
                }
            })
        } else {
            data = await prisma.areaKecamatan.findMany({
                where: {
                    idKabkot: Number(def.idKabkot)
                }
            })
        }
    }
    
    return data
}