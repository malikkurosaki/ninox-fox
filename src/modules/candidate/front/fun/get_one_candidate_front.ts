"use server"
import prisma from "@/modules/_global/bin/prisma"

export async function funGetOneCandidateFront({candidate}: {candidate: any}) {
    const data = await prisma.candidate.findUnique({
        where: {
            id: candidate
        }
    })

    return data
}