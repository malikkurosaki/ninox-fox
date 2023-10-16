"use server"

import prisma from "../bin/prisma"

export async function MasterKecGetByKab({idKabkot}: {idKabkot: Number}) {
    const data = await prisma.areaKecamatan.findMany({
        where: {
            idKabkot: Number(idKabkot),
            isActive: true
        }
    })

    return data
}