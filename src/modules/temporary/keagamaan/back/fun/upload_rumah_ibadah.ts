'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadRumahIbadah({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Agama_RumahIbadah.update({
            where: {
                id: Number(i.id)
            },
            data: {
                masjid: Number(i.Masjid),
                gerejaKhatolik: Number(i.GerejaKhatolik),
                gerejaProtestan: Number(i.GerejaProtestan),
                pura: Number(i.Pura),
                wihara: Number(i.Wihara),
                kelenteng: Number(i.Kelenteng),
            }
        });
    }

    revalidatePath('dashboard/se/rumah-ibadah')

    return {
        success: true,
        message: 'Sukses'
    }
}