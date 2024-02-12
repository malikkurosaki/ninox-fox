'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadFasilitas() {
    const data = await prisma.sE_Kesehatan_Fasilitas.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            apotek: true,
            bidan: true,
            puskesmasDgRawatInap: true,
            puskesmasTnpRawatInap: true,
            rumahBersalin: true,
            rumahSakit: true,
            rumahSakitBersalin: true,
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
        ..._.omit(v, ["rumahSakit", "rumahBersalin", "rumahSakitBersalin", "bidan", "apotek", "puskesmasDgRawatInap", "puskesmasTnpRawatInap", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        RumahSakit: v.rumahSakit,
        RumahBersalin: v.rumahBersalin,
        RumahSakitBersalin: v.rumahSakitBersalin,
        TempatPraktekBidan: v.bidan,
        Apotek: v.apotek,
        PuskesmasDenganRawatInap: v.puskesmasDgRawatInap,
        PuskesmasTanpaRawatInap: v.puskesmasTnpRawatInap,
    }))

    const allData = {
        title: 'Kesehatan - Jumlah Fasilitas Kesehatan',
        data: dataTable
    }

    return allData
}