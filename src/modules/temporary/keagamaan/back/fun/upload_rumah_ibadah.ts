'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadRumahIbadah({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Agama_RumahIbadah.update({
            where: {
                id: Number(i.id)
            },
            data: {
                masjid: (_.isNaN(Number(i.Masjid))) ? 0 : Number(i.Masjid),
                gerejaKhatolik: (_.isNaN(Number(i.GerejaKhatolik))) ? 0 : Number(i.GerejaKhatolik),
                gerejaProtestan: (_.isNaN(Number(i.GerejaProtestan))) ? 0 : Number(i.GerejaProtestan),
                pura: (_.isNaN(Number(i.Pura))) ? 0 : Number(i.Pura),
                wihara: (_.isNaN(Number(i.Wihara))) ? 0 : Number(i.Wihara),
                kelenteng: (_.isNaN(Number(i.Kelenteng))) ? 0 : Number(i.Kelenteng),
            }
        });
    }

    revalidatePath('dashboard/se/rumah-ibadah')

    return {
        success: true,
        message: 'Sukses'
    }
}