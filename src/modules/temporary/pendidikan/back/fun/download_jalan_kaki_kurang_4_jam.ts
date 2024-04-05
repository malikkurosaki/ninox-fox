'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJalanKakiKurang4Jam() {
    const data = await prisma.sE_Pendidikan_JalanKakiKurangEmpatJam.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            value: true,
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
        ..._.omit(v, ["value", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        FasilitasBeradaDalamDesa: v.value,
    }))

    const allData = {
        title: 'Pendidikan - Berjalan Kaki Kurang Dari 4 Jam Untuk Mencapai SD Terdekat',
        data: dataTable
    }

    return allData
}