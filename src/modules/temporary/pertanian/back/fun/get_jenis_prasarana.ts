'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetJenisPrasarana({ provinsi, kab }: { provinsi?: any, kab?: any }) {
    let titleTrue, dataTable = <any>[], area, th
    const nProv = await provinsiCount()

    if (!_.isNull(provinsi) && !_.isUndefined(provinsi) && provinsi > 0 && provinsi <= nProv) {
        if (_.isNull(kab) || _.isUndefined(kab)) {
            dataTable = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.findMany({
                where: {
                    idProvinsi: Number(provinsi)
                },
                select: {
                    aspal: true,
                    diperkeras: true,
                    tanah: true,
                    tidakTerdefinisi: true,
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
                aspal: _.sumBy(v, 'aspal'),
                diperkeras: _.sumBy(v, 'diperkeras'),
                tanah: _.sumBy(v, 'tanah'),
                tidakTerdefinisi: _.sumBy(v, 'tidakTerdefinisi'),
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
            dataTable = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.findMany({
                where: {
                    idKabkot: Number(kab)
                },
                select: {
                    aspal: true,
                    diperkeras: true,
                    tanah: true,
                    tidakTerdefinisi: true,
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
        dataTable = await prisma.sE_Pertanian_JenisPrasaranaTransportasi.findMany({
            select: {
                aspal: true,
                diperkeras: true,
                tanah: true,
                tidakTerdefinisi: true,
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
            aspal: _.sumBy(v, 'aspal'),
            diperkeras: _.sumBy(v, 'diperkeras'),
            tanah: _.sumBy(v, 'tanah'),
            tidakTerdefinisi: _.sumBy(v, 'tidakTerdefinisi'),
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