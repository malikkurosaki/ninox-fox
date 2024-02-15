'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJarakFasilitas({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Pendidikan_JarakFasilitas.update({
            where: {
                id: Number(i.id)
            },
            data: {
                sd: (_.isNaN(Number(i.JarakKeSDTerdekat))) ? 0 : Number(i.JarakKeSDTerdekat),
                smp: (_.isNaN(Number(i.JarakKeSMPTerdekat))) ? 0 : Number(i.JarakKeSMPTerdekat),
                sma: (_.isNaN(Number(i.JarakKeSMATerdekat))) ? 0 : Number(i.JarakKeSMATerdekat),
                smk: (_.isNaN(Number(i.JarakKeSMKTerdekat))) ? 0 : Number(i.JarakKeSMKTerdekat),
            }
        });
    }

    revalidatePath('dashboard/se/jarak-fasilitas')

    return {
        success: true,
        message: 'Sukses'
    }
}