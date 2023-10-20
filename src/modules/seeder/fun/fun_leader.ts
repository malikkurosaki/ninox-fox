
"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederLeader } from ".."

/**
 * Fungsi untuk ambil data seeder leader .
 * @returns hasil untuk data seeder leader
 */
export async function funSeederLeader() {
    for (let data of seederLeader) {
        await prisma.categoryLeaderTraitAssessment.upsert({
            where: {
                id: data.id
            },
            create: {
                id: data.id,
                name: data.name
            },
            update: {
                id: data.id,
                name: data.name
            }
        })
    }

    return {
        success: true,
        message: "Category Leader Success"
    }

}