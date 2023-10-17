"use server"

import prisma from "@/modules/_global/bin/prisma"

/**
 * Fungsi untuk download.
 * @returns hasil untuk download data leader
 */
export async function funDownLeader() {
    const data = await prisma.categoryLeaderTraitAssessment.findMany({
        where: {
            isActive: true
        },
        select: {
            id: true,
            name: true

        }
    })
    return data
}