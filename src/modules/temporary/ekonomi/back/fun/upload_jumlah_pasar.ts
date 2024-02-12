'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJumlahPasar({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Ekonomi_JumlahPasar.update({
            where: {
                id: Number(i.id)
            },
            data: {
                bangunanPermanen: Number(i.JumlahPasarDenganBangunanPermanen),
                bangunanSemiPermanen: Number(i.JumlahPasarDenganBangunanSemiPermanen),
                tanpaBangunan: Number(i.JumlahPasarTanpaBangunan),
            }
        });
    }

    revalidatePath('dashboard/se/jumlah-pasar');

    return {
        success: true,
        message: 'Sukses'
    }
}