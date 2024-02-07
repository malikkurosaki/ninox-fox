'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadRataRataJarakFasilitas({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_RataRataJarakFasilitas.update({
            where: {
                id: Number(i.id)
            },
            data: {
                bidan: Number(i.JarakTerdekatMenujuBidan),
                puskesmasDgRawatInap: Number(i.JarakTerdekatMenujuPuskesmasDenganRawatInap),
                puskesmasTanpaRawatInap: Number(i.JarakTerdekatMenujuPuskesmasTanpaRawatInap),
                rumahSakit: Number(i.JarakTerdekatMenujuRumahSakit),
            }
        });
    }

    revalidatePath('dashboard/se/rata-rata-jarak-fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}