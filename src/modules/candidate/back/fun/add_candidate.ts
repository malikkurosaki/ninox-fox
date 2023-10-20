'use server'

import prisma from "@/modules/_global/bin/prisma";
import { Candidate } from "@prisma/client";
import { revalidatePath } from "next/cache";


/**
 * Fungsi untuk create candidate
 * @param {Candidate} body - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */

export default async function funAddCandidate({ body }: { body: Candidate }) {

    const data = await prisma.candidate.create({
        data: body,
    })

    revalidatePath('/dashboard/candidate?prov' + body.idProvinsi + '&city=' + body.idKabkot)

    return {
        success: true,
        message: "Success"
    }

}