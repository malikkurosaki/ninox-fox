'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadBpjs({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kemiskinan_BPJS.update({
            where: {
                id: Number(i.id)
            },
            data: {
                value: Number(i.Value),
            }
        });
    }

    revalidatePath('dashboard/se/bpjs');

    return {
        success: true,
        message: 'Sukses'
    }
}