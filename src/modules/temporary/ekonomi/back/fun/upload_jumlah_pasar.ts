'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
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
                bangunanPermanen:(_.isNaN(Number(i.JumlahPasarDenganBangunanPermanen))) ? 0 : Number(i.JumlahPasarDenganBangunanPermanen),
                bangunanSemiPermanen: (_.isNaN(Number(i.JumlahPasarDenganBangunanSemiPermanen))) ? 0 :  Number(i.JumlahPasarDenganBangunanSemiPermanen),
                tanpaBangunan: (_.isNaN(Number(i.JumlahPasarTanpaBangunan))) ? 0 : Number(i.JumlahPasarTanpaBangunan),
            }
        });
    }

    revalidatePath('dashboard/se/jumlah-pasar');

    return {
        success: true,
        message: 'Sukses'
    }
}