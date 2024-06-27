"use server"

import prisma from "../bin/prisma"

export async function candateTingkat() {
    const canCount1 = await prisma.candidate.count({
        where: {
            isActive: true,
            tingkat: 1
        }
    })
    const canCount2 = await prisma.candidate.count({
        where: {
            isActive: true,
            tingkat: 2
        }
    })

    const alldata = {
        can1 : canCount1,
        can2 : canCount2,
    }
    return alldata
}