'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadFasilitas({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_Fasilitas.update({
            where: {
                id: Number(i.id)
            },
            data: {
                rumahSakit: Number(i.RumahSakit),
                rumahBersalin: Number(i.RumahBersalin),
                rumahSakitBersalin: Number(i.RumahSakitBersalin),
                bidan: Number(i.TempatPraktekBidan),
                apotek: Number(i.Apotek),
                puskesmasDgRawatInap: Number(i.PuskesmasDenganRawatInap),
                puskesmasTnpRawatInap: Number(i.PuskesmasTanpaRawatInap),
            }
        });
    }

    revalidatePath('dashboard/se/fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}