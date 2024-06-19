"use server"

import prisma from "../bin/prisma"

export async function kabupatenCount() {
    const kabCount = await prisma.areaKabkot.count({
        where: {
            isActive: true
        }
    })
    return kabCount;
}