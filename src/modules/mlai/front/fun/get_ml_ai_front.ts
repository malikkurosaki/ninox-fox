"use server"
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"

export default async function funGetMlAiFront({ candidate }: { candidate?: any }) {

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

    let candidateReal = null

    if (_.isNull(candidate) || _.isUndefined(candidate)) {
        candidateReal = can?.id
    } else {
        candidateReal = candidate
    }

    if (candidateReal == null) {
        return null
    } else {
        const data = await prisma.mlAi.findMany({
            where: {
                idCandidate: candidateReal,
                isActive: true,
            },
        })

        return data
    }

}