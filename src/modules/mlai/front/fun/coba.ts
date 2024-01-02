"use server"

import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function coba() {

    const def = await funGetUserDefaultFront()
    
    const can = await prisma.candidate.findFirst({
        where: {
            isActive: true,
            // id prov, idkabkot, tingkat
        },
        select:{
            id: true,
        }
    })

    const data = await prisma.mlAi.findFirst({
        where: {
             idCandidate: can?.id,
             // isactive 
        }
    })
}