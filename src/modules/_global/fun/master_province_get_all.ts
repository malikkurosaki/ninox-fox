"use server"

import prisma from "../bin/prisma"
/**
 * Fungsi untuk menampilkan wilayah.
 * @returns hasil untuk menampilkan provinsi
 */
export async function MasterProvinceGetAll() {
    const data = await prisma.areaProvinsi.findMany({
        where: {
            isActive: true
        }
    })

    return data;
}