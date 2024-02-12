'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadPermukaanJalan({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Transportasi_PermukaanJalanYgTerluas.update({
            where: {
                id: Number(i.id)
            },
            data: {
                diperkeras: Number(i.Diperkeras),
                aspal: Number(i.Aspal),
            }
        });
    }

    revalidatePath('dashboard/se/permukaan-jalan')

    return {
        success: true,
        message: 'Sukses'
    }
}