'use server'
import prisma from "../bin/prisma"

export default async function funGetOneKecamatan({ id }: { id: any }) {
    const data = await prisma.areaKecamatan.findUnique({
        where: {
            id: Number(id),
        }
    })

    return data
}