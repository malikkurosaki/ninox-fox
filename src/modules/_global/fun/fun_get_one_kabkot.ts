'use server'
import prisma from "../bin/prisma"

export default async function funGetOneKabkot({ id }: { id: any }) {
    const data = await prisma.areaKabkot.findUnique({
        where: {
            id: Number(id),
        }
    })

    return data
}