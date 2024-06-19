"use server"
import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk Edit step
 * @param {Step} body - berisi idcandidate, category, content, sentiment
 * @returns success - true 
 */
export default async function funEditStep({ body, text }: { body: any, text: any }) {
    const data = await prisma.step.update({
        where: {
            id: body.id,
        },
        data: {
            content: text,
            category: body.category,
            sentiment: Number(body.sentiment)
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

    revalidatePath("dashboard/step?prov" + data.Candidate.AreaProvinsi + "&city" + data.Candidate.AreaKabkot)

    return data

}