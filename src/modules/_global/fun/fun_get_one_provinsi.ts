'use server'
import prisma from "../bin/prisma"

export default async function funGetOneProvinsi({ id }: { id: any }) {
    const data = await prisma.areaProvinsi.findUnique({
        where: {
            id: Number(id),
        }
    })

    return data
}