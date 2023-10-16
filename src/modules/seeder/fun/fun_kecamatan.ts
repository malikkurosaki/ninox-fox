"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederKecamatan } from ".."

export async function funSeederKecamatan() {
    for (let data of seederKecamatan) {
        await prisma.areaKecamatan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKabkot: Number(data.idKabkot),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKabkot: Number(data.idKabkot),
                name: data.name
            }
        })
    }
    return {
        success: true,
        message: "success Kecamatan"
    }

}