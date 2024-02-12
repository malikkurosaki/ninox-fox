'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadRataRataJarakFasilitas() {
    const data = await prisma.sE_Kesehatan_RataRataJarakFasilitas.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            bidan: true,
            puskesmasDgRawatInap: true,
            puskesmasTanpaRawatInap: true,
            rumahSakit: true,
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
        ..._.omit(v, ["rumahSakit", "bidan", "puskesmasDgRawatInap", "puskesmasTanpaRawatInap", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        JarakTerdekatMenujuBidan: v.bidan,
        JarakTerdekatMenujuPuskesmasTanpaRawatInap: v.puskesmasTanpaRawatInap,
        JarakTerdekatMenujuPuskesmasDenganRawatInap: v.puskesmasDgRawatInap,
        JarakTerdekatMenujuRumahSakit: v.rumahSakit,
    }))

    const allData = {
        title: 'Kesehatan - Rata Rata Jarak Ke Fasilitas Kesehatan',
        data: dataTable
    }

    return allData
}