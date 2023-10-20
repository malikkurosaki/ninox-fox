"use server"

import prisma from "../bin/prisma"

export async function kecamatanCount() {
    const kecCount = await prisma.areaKecamatan.count({
        where: {
            isActive: true
        }
    })
    return kecCount;
}