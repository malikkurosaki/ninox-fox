'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJarakFasilitas({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Pendidikan_JarakFasilitas.update({
            where: {
                id: Number(i.id)
            },
            data: {
                sd: Number(i.JarakKeSDTerdekat),
                smp: Number(i.JarakKeSMPTerdekat),
                sma: Number(i.JarakKeSMATerdekat),
                smk: Number(i.JarakKeSMKTerdekat),
            }
        });
    }

    revalidatePath('dashboard/se/jarak-fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}