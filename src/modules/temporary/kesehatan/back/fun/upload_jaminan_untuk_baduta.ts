'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJaminanUntukBaduta({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        if (i.id != "") {
            await prisma.sE_Kesehatan_JaminanUntukBaduta.update({
                where: {
                    id: Number(i.id)
                },
                data: {
                    ya: (_.isNaN(Number(i.Ya))) ? 0 : Number(i.Ya),
                    tidak: (_.isNaN(Number(i.Tidak))) ? 0 : Number(i.Tidak),
                }
            });
        }
    }

    revalidatePath('dashboard/se/jaminan-untuk-baduta')

    return {
        success: true,
        message: 'Sukses'
    }
}