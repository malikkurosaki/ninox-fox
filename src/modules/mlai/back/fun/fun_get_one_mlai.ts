"use server"

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetOneMlAi({ id }: { id: any }) {
    const data = await prisma.candidate.findUnique({
        where: {
            id: Number(id)
        }
    })

    return data
}