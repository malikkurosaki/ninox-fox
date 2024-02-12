'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadPenipuanDanPenggelapan() {
    const data = await prisma.sE_Keamanan_PenipuanDanPenggelapan.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            meningkat: true,
            menurun: true,
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
        ..._.omit(v, ["meningkat", "menurun", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Meningkat: v.meningkat,
        Menurun: v.menurun,
    }))

    const allData = {
        title: 'Keamanan - Intensitas Kejahatan Penipuan Dan Penggelapan',
        data: dataTable
    }

    return allData
}