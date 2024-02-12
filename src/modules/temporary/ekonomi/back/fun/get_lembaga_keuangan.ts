'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetLembagaKeuangan({ provinsi, kab }: { provinsi?: any, kab?: any }) {
    let titleTrue, dataTable = <any>[], area, th
    const nProv = await provinsiCount()

    if (!_.isNull(provinsi) && !_.isUndefined(provinsi) && provinsi > 0 && provinsi <= nProv) {
        if (_.isNull(kab) || _.isUndefined(kab)) {
            dataTable = await prisma.sE_Ekonomi_LembagaKeuangan.findMany({
                where: {
                    idProvinsi: Number(provinsi)
                },
                select: {
                    bankPengkreditanRakyat: true,
                    bankUmumPemerintah: true,
                    bankUmumSwasta: true,
                    koperasiSimpanPinjam: true,
                    idKabkot: true,
                    AreaKabkot: {
                        select: {
                            name: true
                        }
                    }
                },
                orderBy: {
                    idKabkot: 'asc'
                }
            })

            dataTable = dataTable.map((v: any) => ({
                ..._.omit(v, ["AreaKabkot"]),
                name: v.AreaKabkot.name
            }))

            dataTable = _.map(_.groupBy(dataTable, "idKabkot"), (v: any) => ({
                bankUmumPemerintah: _.sumBy(v, 'bankUmumPemerintah'),
                bankUmumSwasta: _.sumBy(v, 'bankUmumSwasta'),
                bankPengkreditanRakyat: _.sumBy(v, 'bankPengkreditanRakyat'),
                koperasiSimpanPinjam: _.sumBy(v, 'koperasiSimpanPinjam'),
                name: v[0].name
            }))

            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: Number(provinsi)
                }
            })

            titleTrue = "PROVINSI " + area?.name
            th = "KABUPATEN/KOTA"
        } else {
            dataTable = await prisma.sE_Ekonomi_LembagaKeuangan.findMany({
                where: {
                    idKabkot: Number(kab)
                },
                select: {
                    bankPengkreditanRakyat: true,
                    bankUmumPemerintah: true,
                    bankUmumSwasta: true,
                    koperasiSimpanPinjam: true,
                    idKecamatan: true,
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

            dataTable = dataTable.map((v: any) => ({
                ..._.omit(v, ["AreaKecamatan"]),
                name: v.AreaKecamatan.name
            }))

            area = await prisma.areaKabkot.findUnique({
                where: {
                    id: Number(kab)
                }
            })

            titleTrue = "" + area?.name
            th = "KECAMATAN"
        }
    } else {
        dataTable = await prisma.sE_Ekonomi_LembagaKeuangan.findMany({
            select: {
                bankPengkreditanRakyat: true,
                bankUmumPemerintah: true,
                bankUmumSwasta: true,
                koperasiSimpanPinjam: true,
                idProvinsi: true,
                AreaProvinsi: {
                    select: {
                        name: true
                    }
                }
            },
            orderBy: {
                id: 'asc'
            }
        })

        dataTable = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaProvinsi"]),
            name: v.AreaProvinsi.name
        }))

        dataTable = _.map(_.groupBy(dataTable, "idProvinsi"), (v: any) => ({
            bankUmumPemerintah: _.sumBy(v, 'bankUmumPemerintah'),
            bankUmumSwasta: _.sumBy(v, 'bankUmumSwasta'),
            bankPengkreditanRakyat: _.sumBy(v, 'bankPengkreditanRakyat'),
            koperasiSimpanPinjam: _.sumBy(v, 'koperasiSimpanPinjam'),
            name: v[0].name
        }))

        titleTrue = "SELURUH PROVINSI DI INDONESIA"
        th = "PROVINSI"
    }

    const allData = {
        title: titleTrue,
        thTitle: th,
        data: dataTable
    }

    return allData
}