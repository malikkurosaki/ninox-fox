'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadGuruHonorer({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Pendidikan_GuruHonorer.update({
            where: {
                id: Number(i.id)
            },
            data: {
                value: (_.isNaN(Number(i.Value))) ? 0 : Number(i.Value),
            }
        });
    }

    revalidatePath('dashboard/se/guru-honorer')

    return {
        success: true,
        message: 'Sukses'
    }
}