'use server'
import prisma from "@/modules/_global/bin/prisma"

export default async function funGetAreaDetailRegional({ candidate, area }: { candidate: any, area: any }) {
    let data = <any>[]

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        data = await prisma.areaKecamatan.findMany({
            where: {
                idKabkot: Number(area)
            }
        })
    } else if (dataC?.tingkat == 2) {
        data = await prisma.areaKelurahan.findMany({
            where: {
                idKecamatan: Number(area)
            }
        })
    }

    return data
}