"use server"

import prisma from "@/modules/_global/bin/prisma"
import { Step } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk create step
 * @param {Step} body - berisi idcandidate, category, content, sentiment
 * @returns success - true 
 */
export default async function funAddStep({body}: {body: Step}) {
    console.log(body)
    const data = await prisma.step.create({
        data: {
            idCandidate: Number(body.idCandidate),
            category: body.category,
            content: body.content,
            sentiment: Number(body.sentiment)
        }
    })

    const area = await prisma.candidate.findUnique({
        where: {
            id: Number(body.idCandidate)
        }
    })
    revalidatePath("dashboard/step?prov" + area?.idProvinsi + "&city" + area?.idKabkot)

    return {
        success: true,
        message: "Success"
    }
}