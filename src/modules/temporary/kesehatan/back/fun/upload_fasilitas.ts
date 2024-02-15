'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
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
                rumahSakit: (_.isNaN(Number(i.RumahSakit))) ? 0 : Number(i.RumahSakit),
                rumahBersalin: (_.isNaN(Number(i.RumahBersalin))) ? 0 : Number(i.RumahBersalin),
                rumahSakitBersalin: (_.isNaN(Number(i.RumahSakitBersalin))) ? 0 : Number(i.RumahSakitBersalin),
                bidan: (_.isNaN(Number(i.TempatPraktekBidan))) ? 0 : Number(i.TempatPraktekBidan),
                apotek: (_.isNaN(Number(i.Apotek))) ? 0 : Number(i.Apotek),
                puskesmasDgRawatInap: (_.isNaN(Number(i.PuskesmasDenganRawatInap))) ? 0 : Number(i.PuskesmasDenganRawatInap),
                puskesmasTnpRawatInap: (_.isNaN(Number(i.PuskesmasTanpaRawatInap))) ? 0 : Number(i.PuskesmasTanpaRawatInap),
            }
        });
    }

    revalidatePath('dashboard/se/fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}