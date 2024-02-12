'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadIbuHamilDariKeluargaMiskin() {
    const data = await prisma.sE_Kesehatan_IbuHamilDariKeluargaMiskin.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            ya: true,
            tidakAda: true,
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
        ..._.omit(v, ["ya", "tidakAda", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Ya: v.ya,
        TidakAda: v.tidakAda,
    }))

    const allData = {
        title: 'Kesehatan - Jaminan Kesehatan Ibu Hamil Dari Keluarga Miskin',
        data: dataTable
    }

    return allData
}