"use server"
import prisma from "@/modules/_global/bin/prisma"
import moment from "moment"

export default async function funDelCandidate({candidate, dateCan}: {candidate: any, dateCan: any}) {
    const data = await prisma.candidateEmotion.deleteMany({
        where: {
            idCandidate: candidate,
            dateEmotion: new Date(moment(dateCan).format("YYYY-MM-DD")),
        }
    })

    return data
}