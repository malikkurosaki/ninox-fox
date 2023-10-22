"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederDesa1, seederDesa2, seederDesa3 } from ".."
import { kelurahanCount } from "@/modules/_global/fun/fun_kelurahan_count"

/**
 * Fungsi untuk ambil data seeder desa .
 * @returns hasil untuk data seeder desa
 */
export async function funSeederDesa() {
    const cekKel = await kelurahanCount()

    if (cekKel > 0) {
        return {
            success: true,
            message: "Data kelurahan kota sudah ada"
        }
    } else {
        const ins = await prisma.areaKelurahan.createMany({
            data: seederDesa1
        })
        const ins2 = await prisma.areaKelurahan.createMany({
            data: seederDesa2
        })
        const ins3 = await prisma.areaKelurahan.createMany({
            data: seederDesa3
        })
        // for (let data of seederDesa1) {
        //     await prisma.areaKelurahan.upsert({
        //         where: {
        //             id: Number(data.id)
        //         },
        //         create: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         },
        //         update: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         }
        //     })
        // }
        // for (let data of seederDesa2) {
        //     await prisma.areaKelurahan.upsert({
        //         where: {
        //             id: Number(data.id)
        //         },
        //         create: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         },
        //         update: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         }
        //     })
        // }
        // for (let data of seederDesa3) {
        //     await prisma.areaKelurahan.upsert({
        //         where: {
        //             id: Number(data.id)
        //         },
        //         create: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         },
        //         update: {
        //             id: Number(data.id),
        //             idKecamatan: Number(data.idKecamatan),
        //             name: data.name
        //         }
        //     })
        // }
        return {
            success: true,
            message: "Success Desa / kelurahan"
        }
    }
}