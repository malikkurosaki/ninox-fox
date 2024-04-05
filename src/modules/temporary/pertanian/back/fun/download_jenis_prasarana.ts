'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJenisPrasarana() {
    const data = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            aspal: true,
            diperkeras: true,
            tanah: true,
            tidakTerdefinisi: true,
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
        ..._.omit(v, ["diperkeras", "aspal", "tidakTerdefinisi", "tanah", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        Diperkeras: v.diperkeras,
        Aspal: v.aspal,
        TidakTerdefinisi: v.tidakTerdefinisi,
        Tanah: v.tanah,
    }))

    const allData = {
        title: 'Pertanian - Jenis Prasarana Ke Lokasi Sentra Produksi',
        data: dataTable
    }

    return allData
}