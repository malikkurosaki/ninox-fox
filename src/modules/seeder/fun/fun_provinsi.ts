
"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederProvinsi } from ".."

/**
 * Fungsi untuk ambil data seeder provinsi .
 * @returns hasil untuk data seeder provinsi
 */
export async function funSeederProvinsi() {
    for (let data of seederProvinsi) {
        await prisma.areaProvinsi.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                name: data.name
            },
            update: {
                id: Number(data.id),
                name: data.name
            }
        })
    }

    return {
        success: true,
        message: "Success Provinsi"
    }
}