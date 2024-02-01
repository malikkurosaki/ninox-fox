'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJaminanKecelakaanKerja() {
    const data = await prisma.sE_Ketenagakerjaan_JaminanKecelakaanKerja.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            ya: true,
            tidak: true,
            tidakTahu: true,
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
        ..._.omit(v, ["ya", "tidak", "tidakTahu", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Ya: v.ya,
        Tidak: v.tidak,
        TidakTahu: v.tidakTahu
    }))

    const allData = {
        title: 'Ketenagakerjaan - Kepemilikan Jaminan Kecelakaan Kerja',
        data: dataTable
    }

    return allData
}