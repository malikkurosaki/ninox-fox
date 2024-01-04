"use server"
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "../.."

export async function funGetOneCandidateFront({ candidate }: { candidate?: any }) {

    let data
    if (candidate == null) {
        const def = await funGetUserDefaultFront()
        data = await prisma.candidate.findFirst({
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
    } else {
        data = await prisma.candidate.findUnique({
            where: {
                id: candidate
            }
        })
    }


    return data
}