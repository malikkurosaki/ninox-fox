'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

export default async function funUploadPct({ body }: { body: any }) {
    for (let i of body) {
        await prisma.publicConcernTrendFix.update({
            where: {
                id: Number(i.id)
            },
            data: {
                pendidikan: Number(i.pendidikan),
                infrastruktur: Number(i.infrastruktur),
                layananKesehatan: Number(i.layananKesehatan),
                kemiskinan: Number(i.kemiskinan),
                keadilanSosial: Number(i.keadilanSosial),
                lapanganPekerjaan: Number(i.lapanganPekerjaan),

            }
        });
    }

    revalidatePath('dashboard/public-concern-trend')

    return {
        success: true,
        message: 'Sukses'
    }
}