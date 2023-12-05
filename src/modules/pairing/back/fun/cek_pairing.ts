'use server'
import prisma from "@/modules/_global/bin/prisma"

export default async function funCekPairing({ candidate1, candidate2, date }: { candidate1: any, candidate2: any, date: any }) {
    const data = await prisma.candidatePairing.count({
        where: {
            idCandidate1: candidate1,
            idCandidate2: candidate2,
            dateEmotion: date
        }
    })

    if (data > 0) return { ada: true }


    return { ada: false }
}