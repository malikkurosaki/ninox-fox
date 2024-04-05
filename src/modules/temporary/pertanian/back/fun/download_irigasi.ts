'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadIrigasi() {
    const data = await prisma.sE_Pertanian_Irigasi.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            ya: true,
            tidak: true,
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
        ..._.omit(v, ["ya", "tidak", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Ya: v.ya,
        Tidak: v.tidak,
    }))

    const allData = {
        title: 'Pertanian - Penggunaan Sungai Untuk Pengairan Irigasi Lahan Pertanian',
        data: dataTable
    }

    return allData
}