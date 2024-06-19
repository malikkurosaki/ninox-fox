'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadPosPelayanan() {
    const data = await prisma.sE_Kesehatan_PosPelayanan.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            terpadu: true,
            aktif: true,
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
        ..._.omit(v, ["terpadu", "aktif", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        JumlahPosPembinaanTerpadu: v.terpadu,
        JumlahPosyanduAktif: v.aktif,
    }))

    const allData = {
        title: 'Kesehatan - Jumlah Pos Pelayanan Kesehatan',
        data: dataTable
    }

    return allData
}