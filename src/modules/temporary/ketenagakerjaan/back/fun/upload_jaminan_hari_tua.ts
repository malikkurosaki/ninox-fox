'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJaminanHariTua({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Ketenagakerjaan_JaminanHariTua.update({
            where: {
                id: Number(i.id)
            },
            data: {
                ya: (_.isNaN(Number(i.Ya))) ? 0 : Number(i.Ya),
                tidak: (_.isNaN(Number(i.Tidak))) ? 0 : Number(i.Tidak),
                tidakTahu: (_.isNaN(Number(i.TidakTahu))) ? 0 : Number(i.TidakTahu)
            }
        });
    }

    revalidatePath('dashboard/se/jaminan-hari-tua')

    return {
        success: true,
        message: 'Sukses'
    }
}