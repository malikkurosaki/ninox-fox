'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from 'lodash'

export default async function funDownloadLembagaKeuangan() {
    const data = await prisma.sE_Ekonomi_LembagaKeuangan.findMany({
        select: {
            id: true,
            idProvinsi: true,
            idKabkot: true,
            idKecamatan: true,
            bankPengkreditanRakyat: true,
            bankUmumPemerintah: true,
            bankUmumSwasta: true,
            koperasiSimpanPinjam: true,
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
        ..._.omit(v, ["bankUmumPemerintah", "bankUmumSwasta", "bankPengkreditanRakyat", "koperasiSimpanPinjam", "AreaProvinsi", "AreaKabkot", "AreaKecamatan", "AreaKelurahan"]),
        Provinsi: v.AreaProvinsi.name,
        Kabkot: v.AreaKabkot.name,
        Kecamatan: v.AreaKecamatan.name,
        JumlahBankUmumPemerintah: v.bankUmumPemerintah,
        JumlahBankUmumSwasta: v.bankUmumSwasta,
        JumlahBankPengkreditanRakyat: v.bankPengkreditanRakyat,
        JumlahKoperasiSimpanPinjam: v.koperasiSimpanPinjam,
    }))

    const allData = {
        title: 'Ekonomi - Ketersediaan Lembaga Keuangan',
        data: dataTable
    }

    return allData
}