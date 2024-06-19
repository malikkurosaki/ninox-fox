'use server'
import prisma from "@/modules/_global/bin/prisma"

export default async function funCekEmotion({ candidate, date }: { candidate: any, date: any }) {
    const data = await prisma.candidateEmotion.count({
        where: {
            idCandidate: candidate,
            dateEmotion: date
        }
    })

    if (data > 0) return { ada: true }


    return { ada: false }
}