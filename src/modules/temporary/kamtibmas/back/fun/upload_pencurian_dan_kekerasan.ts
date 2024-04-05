'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadPencurianDanKekerasan({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        if (i.id != "") {
            await prisma.sE_Keamanan_PencurianDanKekerasan.update({
                where: {
                    id: Number(i.id)
                },
                data: {
                    meningkat: (_.isNaN(Number(i.Meningkat))) ? 0 : Number(i.Meningkat),
                    menurun: (_.isNaN(Number(i.Menurun))) ? 0 : Number(i.Menurun),
                }
            });
        }
    }

    revalidatePath('dashboard/se/pencurian-dan-kekerasan')

    return {
        success: true,
        message: 'Sukses'
    }
}