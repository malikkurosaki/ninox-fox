"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederKabupaten } from ".."

export async function funSeederKabupaten() {
    for (let data of seederKabupaten) {
        await prisma.areaKabkot.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idProvinsi: Number(data.idProvinsi),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idProvinsi: Number(data.idProvinsi),
                name: data.name
            }
        })
    }
    return {
        success: true,
        message: "Success Kabupaten/ Kota"
    }

}