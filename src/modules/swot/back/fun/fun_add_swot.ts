"use server"

import prisma from "@/modules/_global/bin/prisma"
import { Swot } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk create swot
 * @param {Swot} body - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */

export default async function funAddSwotf({ body }: { body: Swot }) {
    const data = await prisma.swot.create({
        data: {
            idCandidate: Number(body.idCandidate),
            category: body.category,
            content: body.content
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

    return {
        success: true,
        message: "Success"
    }
}