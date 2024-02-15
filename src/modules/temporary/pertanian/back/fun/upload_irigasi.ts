'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadIrigasi({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Pertanian_Irigasi.update({
            where: {
                id: Number(i.id)
            },
            data: {
                ya: (_.isNaN(Number(i.Ya))) ? 0 : Number(i.Ya),
                tidak: (_.isNaN(Number(i.Tidak))) ? 0 : Number(i.Tidak),
            }
        });
    }

    revalidatePath('dashboard/se/irigasi');

    return {
        success: true,
        message: 'Sukses'
    }
}