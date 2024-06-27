'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadJarakFasilitas() {
    const data = await prisma.sE_Pendidikan_JarakFasilitas.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            sd: true,
            smp: true,
            sma: true,
            smk: true,
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
        ..._.omit(v, ["sd", "smp", "smk", "sma", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        JarakKeSDTerdekat: v.sd,
        JarakKeSMPTerdekat: v.smp,
        JarakKeSMATerdekat: v.sma,
        JarakKeSMKTerdekat: v.smk,

    }))

    const allData = {
        title: 'Pendidikan - Rata Rata Jarak Fasilitas Pendidikan',
        data: dataTable
    }

    return allData
}