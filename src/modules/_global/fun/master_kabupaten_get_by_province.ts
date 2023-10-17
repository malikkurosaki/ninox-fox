"use server"

import prisma from "../bin/prisma"

/**
 * Fungsi untuk menampilkan wilayah.
 * @param {number} idProvinsi - id Provinsi.
 * @returns hasil untuk menampilkan kabupaten by provinsi
 */
export async function MasterKabGetByProvince({ idProvinsi }: { idProvinsi: number }) {
    const data = await prisma.areaKabkot.findMany({
        where: {
            idProvinsi: idProvinsi,
            isActive: true
        }
    })

    return data
}