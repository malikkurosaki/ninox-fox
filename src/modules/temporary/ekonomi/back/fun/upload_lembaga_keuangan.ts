'use server'
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";
import { revalidatePath } from "next/cache";

/**
 * Upload data audience
 * @param body array yang berisikan data audience hasil dari file csv
 * @returns array success & message
 */

export default async function funUploadLembagaKeuangan({ body }: { body: any }) {

    // looping data csv
    for (let i of body) {
        // update data audience
        await prisma.sE_Ekonomi_LembagaKeuangan.update({
            where: {
                id: Number(i.id)
            },
            data: {
                bankUmumPemerintah: (_.isNaN(Number(i.JumlahBankUmumPemerintah))) ? 0 : Number(i.JumlahBankUmumPemerintah),
                bankUmumSwasta: (_.isNaN(Number(i.JumlahBankUmumSwasta))) ? 0 : Number(i.JumlahBankUmumSwasta),
                bankPengkreditanRakyat: (_.isNaN(Number(i.JumlahBankPengkreditanRakyat))) ? 0 : Number(i.JumlahBankPengkreditanRakyat),
                koperasiSimpanPinjam: (_.isNaN(Number(i.JumlahKoperasiSimpanPinjam))) ? 0 : Number(i.JumlahKoperasiSimpanPinjam),
            }
        });
    }

    revalidatePath('dashboard/se/lembaga-keuangan');

    return {
        success: true,
        message: 'Sukses'
    }
}