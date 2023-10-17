'use server'

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetCandidateByArea() {
    const data = await prisma.candidate.findMany()

    const allData = {
        title: "PROVINSI JAWA TIMUR",
        data: data
    }
    return allData
}