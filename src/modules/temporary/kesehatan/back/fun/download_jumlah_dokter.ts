'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJumlahDokter() {
    const data = await prisma.sE_Kesehatan_JumlahDokter.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            pria: true,
            wanita: true,
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
        ..._.omit(v, ["wanita", "pria", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        TenagaDokterPriaYangTinggalMenetapDiDesa: v.pria,
        TenagaDokterWanitaYangTinggalMenetapDiDesa: v.wanita,
    }))

    const allData = {
        title: 'Kesehatan - Jumlah Dokter',
        data: dataTable
    }

    return allData
}