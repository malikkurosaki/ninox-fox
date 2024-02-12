'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetRumahIbadah({ provinsi, kab }: { provinsi?: any, kab?: any }) {
    let titleTrue, dataTable = <any>[], area, th
    const nProv = await provinsiCount()

    if (!_.isNull(provinsi) && !_.isUndefined(provinsi) && provinsi > 0 && provinsi <= nProv) {
        if (_.isNull(kab) || _.isUndefined(kab)) {
            dataTable = await prisma.sE_Agama_RumahIbadah.findMany({
                where: {
                    idProvinsi: Number(provinsi)
                },
                select: {
                    gerejaKhatolik: true,
                    gerejaProtestan: true,
                    kelenteng: true,
                    masjid: true,
                    pura: true,
                    wihara: true,
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
                gerejaKhatolik: _.sumBy(v, 'gerejaKhatolik'),
                gerejaProtestan: _.sumBy(v, 'gerejaProtestan'),
                kelenteng: _.sumBy(v, 'kelenteng'),
                masjid: _.sumBy(v, 'masjid'),
                pura: _.sumBy(v, 'pura'),
                wihara: _.sumBy(v, 'wihara'),
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
            dataTable = await prisma.sE_Agama_RumahIbadah.findMany({
                where: {
                    idKabkot: Number(kab)
                },
                select: {
                    gerejaKhatolik: true,
                    gerejaProtestan: true,
                    kelenteng: true,
                    masjid: true,
                    pura: true,
                    wihara: true,
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
        dataTable = await prisma.sE_Agama_RumahIbadah.findMany({
            select: {
                gerejaKhatolik: true,
                gerejaProtestan: true,
                kelenteng: true,
                masjid: true,
                pura: true,
                wihara: true,
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
            gerejaKhatolik: _.sumBy(v, 'gerejaKhatolik'),
            gerejaProtestan: _.sumBy(v, 'gerejaProtestan'),
            kelenteng: _.sumBy(v, 'kelenteng'),
            masjid: _.sumBy(v, 'masjid'),
            pura: _.sumBy(v, 'pura'),
            wihara: _.sumBy(v, 'wihara'),
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