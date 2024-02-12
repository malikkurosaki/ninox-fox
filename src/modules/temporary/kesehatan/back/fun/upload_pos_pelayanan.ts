'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadPosPelayanan({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_PosPelayanan.update({
            where: {
                id: Number(i.id)
            },
            data: {
                terpadu: Number(i.JumlahPosPembinaanTerpadu),
                aktif: Number(i.JumlahPosyanduAktif),
            }
        });
    }

    revalidatePath('dashboard/se/pos-pelayanan')

    return {
        success: true,
        message: 'Sukses'
    }
}