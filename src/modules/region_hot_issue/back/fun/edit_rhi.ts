'use server'
import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

export default async function funEditRhi({ id, text }: { id: any, text: any }) {
    const ada = await prisma.regionHotIssues.update({
        where: {
            id: Number(id),
        },
        data: {
            description: text
        },
        select: {
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            idKelurahan: true,
        }
    })

    revalidatePath("dashboard/region-hot-issue?prov=" + ada.idProvinsi + "&city=" + ada.idKabkot + "&kec=" + ada.idKecamatan)

    return {
        success: true,
        message: "Success"
    }
}