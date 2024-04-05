'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJenisPrasaranaTransportasi({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        if (i.id != "") {
            await prisma.sE_Pertanian_JenisPrasaranaTransportasi.update({
                where: {
                    id: Number(i.id)
                },
                data: {
                    diperkeras: (_.isNaN(Number(i.Diperkeras))) ? 0 : Number(i.Diperkeras),
                    aspal: (_.isNaN(Number(i.Aspal))) ? 0 : Number(i.Aspal),
                    tidakTerdefinisi: (_.isNaN(Number(i.TidakTerdefinisi))) ? 0 : Number(i.TidakTerdefinisi),
                    tanah: (_.isNaN(Number(i.Tanah))) ? 0 : Number(i.Tanah),
                }
            });
        }
    }

    revalidatePath('dashboard/se/jenis-prasarana-transportasi');

    return {
        success: true,
        message: 'Sukses'
    }
}