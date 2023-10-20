"use server"

import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetOneStep({ id }: { id: any }) {
    const data = await prisma.step.findUnique({
        where: {
            isActive: true,
            id: Number(id)
        },
        select: {
            id: true,
            category: true,
            content: true,
            sentiment: true,
            Candidate: {
                select: {
                    name: true,
                    AreaKabkot: {
                        select: {
                            name: true
                        }
                    },
                    AreaProvinsi: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    })
    const result = {
        id: data?.id,
        content: data?.content,
        category: data?.category,
        sentiment: data?.sentiment,
        name: data?.Candidate.name,
        areaKabkot: _.isUndefined(data?.Candidate.AreaKabkot?.name) ? null : data?.Candidate.AreaKabkot?.name,
        areaProvinsi: _.isUndefined(data?.Candidate.AreaProvinsi?.name) ? null : data?.Candidate.AreaProvinsi?.name
    }

    return result
}