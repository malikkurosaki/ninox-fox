"use server"

import prisma from "../bin/prisma"

export async function MasterProvinceGetAll() {
    const data = await prisma.areaProvinsi.findMany({
        where: {
            isActive: true
        }
    })

    return data;
}