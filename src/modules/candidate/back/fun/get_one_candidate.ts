'use server'

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetOneCandidate({ id }: { id: any }) {
    const data = await prisma.candidate.findUnique({
        where: {
            id: String(id)
        }
    })

    return data
}