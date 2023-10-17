"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederDesa1, seederDesa2, seederDesa3 } from ".."

/**
 * Fungsi untuk ambil data seeder desa .
 * @returns hasil untuk data seeder desa
 */
export async function funSeederDesa() {
    for (let data of seederDesa1) {
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            }
        })
    }
    for (let data of seederDesa2) {
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            }
        })
    }
    for (let data of seederDesa3) {
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.idKecamatan),
                name: data.name
            }
        })
    }
    return {
        success: true,
        message: "Success Desa / kelurahan"
    }
}