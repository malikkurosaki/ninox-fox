'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadKelasIbuHamil({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_KelasIbuHamil.update({
            where: {
                id: Number(i.id)
            },
            data: {
                ya: Number(i.Ya),
                tidakAda: Number(i.TidakAda),
            }
        });
    }

    revalidatePath('dashboard/se/kelas-ibu-hamil')

    return {
        success: true,
        message: 'Sukses'
    }
}