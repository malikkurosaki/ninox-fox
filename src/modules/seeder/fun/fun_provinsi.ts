
"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederProvinsi } from ".."
import { provinsiCount } from "@/modules/_global"

/**
 * Fungsi untuk ambil data seeder provinsi .
 * @returns hasil untuk data seeder provinsi
 */
export async function funSeederProvinsi() {
    const cekProv = await provinsiCount()
    
    if (cekProv > 0) {
        return {
            success: true,
            message: "Data Provinsi sudah ada"
        }
    } else {
        const ins = await prisma.areaProvinsi.createMany({
            data: seederProvinsi
        })
        // for (let data of seederProvinsi) {
        //     await prisma.areaProvinsi.upsert({
        //         where: {
        //             id: umberdata.id)
        //         },
        //         create: {
        //             id: umberdata.id),
        //             name: data.name
        //         },
        //         update: {
        //             id: umberdata.id),
        //             name: data.name
        //         }
        //     })
        // }
        return {
            success: true,
            message: "Success Provinsi"
        }
    }


}