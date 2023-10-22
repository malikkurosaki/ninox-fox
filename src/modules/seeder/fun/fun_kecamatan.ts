"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederKecamatan } from ".."
import { kecamatanCount } from "@/modules/_global/fun/fun_kecamatan_count"

/**
 * Fungsi untuk ambil data seeder kecamatan.
 * @returns hasil untuk data seeder kecamatan
 */
export async function funSeederKecamatan() {
    const cekKec = await kecamatanCount()

    if (cekKec > 0) {
        return {
            success: true,
            message: "Data kecamatan sudah ada"
        }
    } else {
        const ins = await prisma.areaKecamatan.createMany({
            data: seederKecamatan
        })
        // for (let data of seederKecamatan) {
        //     await prisma.areaKecamatan.upsert({
        //         where: {
        //             id: Number(data.id)
        //         },
        //         create: {
        //             id: Number(data.id),
        //             idKabkot: Number(data.idKabkot),
        //             name: data.name
        //         },
        //         update: {
        //             id: Number(data.id),
        //             idKabkot: Number(data.idKabkot),
        //             name: data.name
        //         }
        //     })
        // }
        return {
            success: true,
            message: "success Kecamatan"
        }
    }


}