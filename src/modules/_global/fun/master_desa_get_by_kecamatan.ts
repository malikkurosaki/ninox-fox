"use server"

import prisma from "../bin/prisma"
/**
 * Fungsi untuk menampilkan wilayah.
 * @param {number} idKecamatan - id kecamatan.
 * @returns hasil untuk menampilkan desa by kecamatan
 */
export async function MasterDesaGetByKec({ idKecamatan }: { idKecamatan: Number }) {
    const data = await prisma.areaKelurahan.findMany({
        where: {
            idKecamatan: Number(idKecamatan),
            isActive: true
        }
    })
    return data;
}