"use server"

import prisma from "../bin/prisma"

/**
 * Fungsi untuk menampilkan wilayah.
 * @param {number} idKabkot - id kabupaten kota.
 * @returns hasil untuk menampilkan kecamatan by kabupaten
 */
export async function MasterKecGetByKab({idKabkot}: {idKabkot: Number}) {
    const data = await prisma.areaKecamatan.findMany({
        where: {
            idKabkot: Number(idKabkot),
            isActive: true
        }
    })

    return data
}