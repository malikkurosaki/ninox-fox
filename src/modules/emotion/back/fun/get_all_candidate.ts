'use server'

import prisma from "@/modules/_global/bin/prisma"

/**
 * Get data semua kandidat
 * @returns array data kandidat
 */

export default async function funGetAllCandidate() {
    const data = await prisma.candidate.findMany()

    return data
}