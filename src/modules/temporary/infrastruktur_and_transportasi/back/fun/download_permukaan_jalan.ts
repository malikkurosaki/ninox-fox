'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadPermukaanJalan() {
    const data = await prisma.sE_Transportasi_PermukaanJalanYgTerluas.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            aspal: true,
            diperkeras: true,
            AreaProvinsi: {
                select: {
                    name: true
                }
            },
            AreaKabkot: {
                select: {
                    name: true
                }
            },
            AreaKecamatan: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            idKabkot: 'asc'
        }
    })

    const dataTable = data.map((v: any) => ({
        ..._.omit(v, ["aspal", "diperkeras", "tidakTahu", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Aspal: v.aspal,
        Diperkeras: v.diperkeras,
    }))

    const allData = {
        title: 'Transportasi - Jenis Permukaan Jalan Yang Terluas',
        data: dataTable
    }

    return allData
}