"use server"

import prisma from "@/modules/_global/bin/prisma"
import { Swot } from "@prisma/client"
import { revalidatePath } from "next/cache"

export default async function funEditSwot({body}: {body: Swot}) {
    const data = await prisma.swot.update({
        where: {
            id: body.id,
        },
        data: {
            content: body.content,
            category: body.category
        },
        select: {
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

    revalidatePath("dashboard/swot?prov" + data.Candidate.AreaProvinsi + "&city" + data.Candidate.AreaKabkot)

    return data
}