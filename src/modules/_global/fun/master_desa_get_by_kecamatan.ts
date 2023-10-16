"use server"

import prisma from "../bin/prisma"

export async function MasterDesaGetByKec({ idKecamatan }: { idKecamatan: Number }) {
    const data = await prisma.areaKelurahan.findMany({
        where: {
            idKecamatan: Number(idKecamatan),
            isActive: true
        }
    })
    return data;
}