'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funGetAllCandidateFront() {
    const def = await funGetUserDefaultFront()

    const data = await prisma.candidate.findMany({
        where: {
            isActive: true,
            idProvinsi: Number(def.idProvinsi),
            idKabkot: def.idKabkot,
            tingkat: def.tingkat
        },
        orderBy: {
            name: 'asc'
        }
    })

    return data
}