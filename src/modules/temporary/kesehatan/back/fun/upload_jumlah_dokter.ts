'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadJumlahDokter({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Kesehatan_JumlahDokter.update({
            where: {
                id: Number(i.id)
            },
            data: {
                pria: (_.isNaN(Number(i.TenagaDokterPriaYangTinggalMenetapDiDesa))) ? 0 : Number(i.TenagaDokterPriaYangTinggalMenetapDiDesa),
                wanita: (_.isNaN(Number(i.TenagaDokterWanitaYangTinggalMenetapDiDesa))) ? 0 : Number(i.TenagaDokterWanitaYangTinggalMenetapDiDesa),
            }
        });
    }

    revalidatePath('dashboard/se/jumlah-dokter')

    return {
        success: true,
        message: 'Sukses'
    }
}