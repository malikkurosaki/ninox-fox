"use server"
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funGetMlAiFront({candidate}: {candidate?: any}) {

    const def = await funGetUserDefaultFront()    
    const can = await prisma.candidate.findFirst({
        where: {
            isActive: true,
            idProvinsi: Number(def.idProvinsi),
            idKabkot: def.idKabkot,
            tingkat: def.tingkat
        },
        select:{
            id: true,
        }
    })

    if (candidate == null) {
        candidate= can?.id
    }

    const data = await prisma.mlAi.findFirst({
        where: {
             idCandidate: candidate,
             isActive: true,
        },
        // select: {
        //     id: true,
        //     content: true
        // }
    })

    return data
}