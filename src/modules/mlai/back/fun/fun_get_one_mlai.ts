"use server"

import prisma from "@/modules/_global/bin/prisma"
import { truncateSync } from "fs"
import _ from "lodash"

export default async function funGetOneMlAi({ id }: { id: any }) {
    const data = await prisma.mlAi.findUnique({
        where: {
            isActive: true,
            id: Number(id)
        },
        select: {
            id: true,
            content: true,
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

    // const result = _.omit(data, ["Candidate", "AreaKabkot", "AreaProvinsi"])
    const result = {
        id: data?.id,
        content: data?.content,
        name: data?.Candidate.name,
        areaKabkot: _.isUndefined(data?.Candidate.AreaKabkot?.name) ? null : data?.Candidate.AreaKabkot?.name,
        areaProvinsi: _.isUndefined(data?.Candidate.AreaProvinsi?.name) ? null : data?.Candidate.AreaProvinsi?.name
    }

    return result
}