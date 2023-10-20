"use server"

import prisma from "../bin/prisma"

export async function provinsiCount() {
    const ProCount = await prisma.areaProvinsi.count({
        where: {
            isActive: true,
        }
    })

    return ProCount

}