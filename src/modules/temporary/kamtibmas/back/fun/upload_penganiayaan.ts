'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadPenganiayaan({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Keamanan_Penganiayaan.update({
            where: {
                id: Number(i.id)
            },
            data: {
                meningkat: Number(i.Meningkat),
                menurun: Number(i.Menurun),
            }
        });
    }

    revalidatePath('dashboard/se/penganiayaan');

    return {
        success: true,
        message: 'Sukses'
    }
}