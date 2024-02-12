'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJenisPrasaranaTransportasi({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Pertanian_JenisPrasaranaTransportasi.update({
            where: {
                id: Number(i.id)
            },
            data: {
                diperkeras: Number(i.Diperkeras),
                aspal: Number(i.Aspal),
                tidakTerdefinisi: Number(i.TidakTerdefinisi),
                tanah: Number(i.Tanah),
            }
        });
    }

    revalidatePath('dashboard/se/jenis-prasarana-transportasi');

    return {
        success: true,
        message: 'Sukses'
    }
}