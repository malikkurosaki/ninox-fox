"use server"
import prisma from "@/modules/_global/bin/prisma"
import { Swot } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk edit swot
 * @param {Swot} body - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */

export default async function funEditSwot({ body, text }: { body: Swot, text: any }) {
    const data = await prisma.swot.update({
        where: {
            id: body.id,
        },
        data: {
            content: text,
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