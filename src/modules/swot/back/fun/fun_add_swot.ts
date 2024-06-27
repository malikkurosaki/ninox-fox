"use server"
import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk create swot
 * @param {Swot} body - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */

export default async function funAddSwotf({ body, content }: { body: any, content: any }) {
    const data = await prisma.swot.create({
        data: {
            idCandidate: body.idCandidate,
            category: body.category,
            content: content
        },
        select: {
            id: true,
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
        data: data.id,
        message: "Success"
    }
}