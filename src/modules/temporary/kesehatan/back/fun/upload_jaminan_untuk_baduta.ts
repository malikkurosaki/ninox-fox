'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJaminanUntukBaduta({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_JaminanUntukBaduta.update({
            where: {
                id: Number(i.id)
            },
            data: {
                ya: Number(i.Ya),
                tidak: Number(i.Tidak),
            }
        });
    }

    revalidatePath('dashboard/se/jaminan-untuk-baduta')

    return {
        success: true,
        message: 'Sukses'
    }
}