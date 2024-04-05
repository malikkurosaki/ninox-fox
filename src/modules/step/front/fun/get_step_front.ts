'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funGetStepFront({ candidate }: { candidate?: any }) {
    const def = await funGetUserDefaultFront()
    const can = await prisma.candidate.findFirst({
        where: {
            isActive: true,
            idProvinsi: Number(def.idProvinsi),
            idKabkot: def.idKabkot,
            tingkat: def.tingkat
        },
        select: {
            id: true,
        },
        orderBy: {
            name: 'asc'
        }
    })

    let candidateReal = null, allData = {}

    if (candidate == null) {
        candidateReal = can?.id
    } else {
        candidateReal = candidate
    }

    if (candidateReal != null) {
        const data = await prisma.step.findMany({
            where: {
                idCandidate: candidateReal,
                isActive: true,
            },
        })

        allData = {
            sosial: data.filter((v: any) => v.category === "SOSIAL"),
            teknologi: data.filter((v: any) => v.category === "TEKNOLOGI"),
            ekonomi: data.filter((v: any) => v.category === "EKONOMI"),
            politik: data.filter((v: any) => v.category === "POLITIK")
        }
    }

    return allData
}