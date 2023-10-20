"use server"

import { AnyARecord } from "dns"
import prisma from "../bin/prisma"

/**
 * Fungsi untuk menampilkan wilayah.
 * @param {any} idProvinsi - id Provinsi.
 * @returns hasil untuk menampilkan kabupaten by provinsi
 */
export async function MasterKabGetByProvince({ idProvinsi }: { idProvinsi: any }) {
    const data = await prisma.areaKabkot.findMany({
        where: {
            idProvinsi: idProvinsi,
            isActive: true
        }
    })

    return data
}