"use server"
import prisma from "@/modules/_global/bin/prisma"
import { MlAi } from "@prisma/client"
import { revalidatePath } from "next/cache"

export default async function funEditMlAi({ body, text }: { body: MlAi, text: any }) {
    const data = await prisma.mlAi.update({
        where: {
            id: body.id,
        },
        data: {
            content: text,
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

    revalidatePath("dashboard/ml-ai?prov" + data.Candidate.AreaProvinsi + "&city" + data.Candidate.AreaKabkot)

    return data
}