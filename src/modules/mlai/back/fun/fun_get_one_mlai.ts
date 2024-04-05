"use server"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"
import moment from "moment"

export default async function funGetOneMlAi({ id }: { id: any }) {
    const data = await prisma.mlAi.findUnique({
        where: {
            isActive: true,
            id: Number(id)
        },
        select: {
            id: true,
            content: true,
            idCandidate: true,
            dateContent: true,
            timeContent: true,
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
        idCandidate: data?.idCandidate,
        dateContent: data?.dateContent == null ? null : moment(data?.dateContent).format('YYYY-MM-DD'),
        timeContent: data?.timeContent == null ? null : moment.utc(data?.timeContent).format('HH:mm'),
        areaKabkot: _.isUndefined(data?.Candidate.AreaKabkot?.name) ? null : data?.Candidate.AreaKabkot?.name,
        areaProvinsi: _.isUndefined(data?.Candidate.AreaProvinsi?.name) ? null : data?.Candidate.AreaProvinsi?.name
    }

    return result
}