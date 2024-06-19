'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

export default async function funUploadRhi({ body }: { body: any }) {
    let data
    for (let i of body) {
        data = await prisma.regionHotIssues.update({
            where: {
                id: Number(i.id)
            },
            data: {
                description: String(i.description)
            },
            select: {
                idProvinsi: true
            }
        });
    }

    revalidatePath('dashboard/region-hot-issue?prov=' + data?.idProvinsi)

    return {
        success: true,
        message: 'Sukses'
    }
}