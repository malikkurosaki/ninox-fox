'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadRumahIbadah() {
    const data = await prisma.sE_Agama_RumahIbadah.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            gerejaKhatolik: true,
            gerejaProtestan: true,
            kelenteng: true,
            masjid: true,
            pura: true,
            wihara: true,
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
        ..._.omit(v, ["masjid", "gerejaKhatolik", "gerejaProtestan", "kelenteng", "pura", "wihara", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Masjid: v.masjid,
        GerejaKhatolik: v.gerejaKhatolik,
        GerejaProtestan: v.gerejaProtestan,
        Pura: v.pura,
        Wihara: v.wihara,
        Kelenteng: v.kelenteng
    }))

    const allData = {
        title: 'Agama - Rumah Ibadah',
        data: dataTable
    }

    return allData
}