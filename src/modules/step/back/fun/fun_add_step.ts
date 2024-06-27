"use server"
import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk create step
 * @param {Step} body - berisi idcandidate, category, content, sentiment
 * @returns success - true 
 */
export default async function funAddStep({ body, content }: { body: any, content: any }) {
    const data = await prisma.step.create({
        data: {
            idCandidate: body.idCandidate,
            category: body.category,
            content: content,
            sentiment: Number(body.sentiment)
        },
        select: {
            id: true
        }
    })

    const area = await prisma.candidate.findUnique({
        where: {
            id: body.idCandidate
        }
    })
    revalidatePath("dashboard/step?prov" + area?.idProvinsi + "&city" + area?.idKabkot)

    return {
        success: true,
        data: data.id,
        message: "Success"
    }
}