"use server"

import prisma from "../bin/prisma"

export async function kelurahanCount() {
    const kelCount = await prisma.areaKelurahan.count({
        where: {
            isActive: true
        }
    })
    return kelCount
}