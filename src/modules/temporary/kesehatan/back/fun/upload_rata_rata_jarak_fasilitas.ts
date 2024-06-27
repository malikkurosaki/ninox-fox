'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
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
        if (i.id != "") {
            await prisma.sE_Kesehatan_RataRataJarakFasilitas.update({
                where: {
                    id: Number(i.id)
                },
                data: {
                    bidan: (_.isNaN(Number(i.JarakTerdekatMenujuBidan))) ? 0 : Number(i.JarakTerdekatMenujuBidan),
                    puskesmasDgRawatInap: (_.isNaN(Number(i.JarakTerdekatMenujuPuskesmasDenganRawatInap))) ? 0 : Number(i.JarakTerdekatMenujuPuskesmasDenganRawatInap),
                    puskesmasTanpaRawatInap: (_.isNaN(Number(i.JarakTerdekatMenujuPuskesmasTanpaRawatInap))) ? 0 : Number(i.JarakTerdekatMenujuPuskesmasTanpaRawatInap),
                    rumahSakit: (_.isNaN(Number(i.JarakTerdekatMenujuRumahSakit))) ? 0 : Number(i.JarakTerdekatMenujuRumahSakit),
                }
            });
        }
    }

    revalidatePath('dashboard/se/rata-rata-jarak-fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}