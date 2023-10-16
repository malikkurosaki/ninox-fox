"use server"

import prisma from "../bin/prisma"

export async function MasterKabGetByProvince({ idProvinsi }: { idProvinsi: number }) {
    const data = await prisma.areaKabkot.findMany({
        where: {
            idProvinsi: idProvinsi,
            isActive: true
        }
    })

    return data
}