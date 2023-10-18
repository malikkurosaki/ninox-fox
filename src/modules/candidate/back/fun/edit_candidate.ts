'use server'

import prisma from "@/modules/_global/bin/prisma"
import { Candidate } from "@prisma/client"
import { revalidatePath } from "next/cache"

/**
 * Fungsi untuk edit candidate
 * @param {Candidate} body - berisi name, id
 * @returns success - true 
 */

export default async function funEditCandidate({ body }: { body: Candidate }) {
    const edit = await prisma.candidate.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name
        },
        select: {
            idProvinsi: true,
            idKabkot: true,
        }
    })

    revalidatePath('/dashboard/candidate?prov' + edit.idProvinsi + '&city=' + edit.idKabkot)

    return {
        success: true,
        message: "Success"
    }
}