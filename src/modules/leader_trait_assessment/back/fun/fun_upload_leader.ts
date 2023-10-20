"use server"

import prisma from "@/modules/_global/bin/prisma"
import { CategoryLeaderTraitAssessment } from "@prisma/client"

/**
 * Fungsi untuk download.
 * @returns hasil untuk upload data leader
 */
export async function funUploadLeader({ data }: { data: CategoryLeaderTraitAssessment }) {
    await prisma.categoryLeaderTraitAssessment.upsert({
        where: {
            id: data.id
        },
        create: {
            id: data.id,
            name: data.name,
        },
        update: {
            id: data.id,
            name: data.name
        }
    })
    return {
        success : true,
        message : 'success'
    }
}