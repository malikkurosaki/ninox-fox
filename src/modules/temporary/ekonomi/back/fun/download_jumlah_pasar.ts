'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJumlahPasar() {
    const data = await prisma.sE_Ekonomi_JumlahPasar.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            bangunanPermanen: true,
            bangunanSemiPermanen: true,
            tanpaBangunan: true,
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
        ..._.omit(v, ["bangunanPermanen", "bangunanSemiPermanen", "tanpaBangunan", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        JumlahPasarDenganBangunanPermanen: v.bangunanPermanen,
        JumlahPasarDenganBangunanSemiPermanen: v.bangunanSemiPermanen,
        JumlahPasarTanpaBangunan: v.tanpaBangunan,
    }))

    const allData = {
        title: 'Ekonomi - Jumlah Pasar Berdasarkan Jenis Bangunan',
        data: dataTable
    }

    return allData
}