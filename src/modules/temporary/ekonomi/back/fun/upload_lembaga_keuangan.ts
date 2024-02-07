'use server'
import prisma from "@/modules/_global/bin/prisma";
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
                bankUmumPemerintah: Number(i.JumlahBankUmumPemerintah),
                bankUmumSwasta: Number(i.JumlahBankUmumSwasta),
                bankPengkreditanRakyat: Number(i.JumlahBankPengkreditanRakyat),
                koperasiSimpanPinjam: Number(i.JumlahKoperasiSimpanPinjam),
            }
        });
    }

    revalidatePath('dashboard/se/lembaga-keuangan');

    return {
        success: true,
        message: 'Sukses'
    }
}