'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJalanDilaluiKendaraan() {
    const data = await prisma.sE_Transportasi_JalanDiLaluiKendaraan.findMany({
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
        Value: v.value
    }))

    const allData = {
        title: 'Transportasi - Jalan Dapat Dilalui Kendaraan',
        data: dataTable
    }

    return allData
}