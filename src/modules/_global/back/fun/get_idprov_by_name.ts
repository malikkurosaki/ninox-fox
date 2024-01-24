'use server'
import prisma from "../../bin/prisma"

export default async function funGetIdprovByName({ name }: { name: string }) {
    const data = await prisma.areaProvinsi.findFirst({
        where: {
            name: name,
        }
    })

    return data
}