'use server'

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash"

/**
 * Fungsi untuk menampilkan data audience berdasarkan area
 * @param {any} find - berisi idprovinsi, idkabkot, idkecamatan
 * @returns title & data 
 */


export default async function funGetRhiByArea({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area, th

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.idKec == 0 && find.idKabkot == 0) {
            dataTable = await prisma.regionHotIssues.findMany({
                where: {
                    idProvinsi: find.idProvinsi,
                    NOT: {
                        idKabkot: null,
                    },
                    idKecamatan: null,
                    idKelurahan: null
                },
                select: {
                    description: true,
                    AreaKabkot: {
                        select: {
                            name: true
                        }
                    }
                }
            })

            dataTable = dataTable.map((v: any) => ({
                ..._.omit(v, ["AreaKabkot"]),
                name: v.AreaKabkot.name
            }))

            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: find.idProvinsi
                }
            })
            titleTrue = "PROVINSI " + area?.name
            th = "KABUPATEN/KOTA"

        } else if (find.idKec == 0 && find.idKabkot > 0) {
            dataTable = await prisma.regionHotIssues.findMany({
                where: {
                    idProvinsi: find.idProvinsi,
                    idKabkot: find.idKabkot,
                    NOT: {
                        idKecamatan: null,
                    },
                    idKelurahan: null
                },
                select: {
                    description: true,
                    AreaKecamatan: {
                        select: {
                            name: true
                        }
                    }
                }
            })

            dataTable = dataTable.map((v: any) => ({
                ..._.omit(v, ["AreaKecamatan"]),
                name: v.AreaKecamatan.name
            }))
            area = await prisma.areaKabkot.findUnique({
                where: {
                    id: find.idKabkot
                }
            })
            titleTrue = area?.name.toUpperCase()
            th = "KECAMATAN"

        } else {
            dataTable = await prisma.regionHotIssues.findMany({
                where: {
                    idProvinsi: find.idProvinsi,
                    idKabkot: find.idKabkot,
                    idKecamatan: find.idKec,
                    NOT: {
                        idKelurahan: null
                    },
                },
                select: {
                    description: true,
                    AreaKelurahan: {
                        select: {
                            name: true
                        }
                    }
                }
            })

            dataTable = dataTable.map((v: any) => ({
                ..._.omit(v, ["AreaKelurahan"]),
                name: v.AreaKelurahan.name
            }))
            area = await prisma.areaKecamatan.findUnique({
                where: {
                    id: find.idKec
                }
            })
            titleTrue = "KECAMATAN " + area?.name.toUpperCase()
            th = "KELURAHAN"
        }

    } else {
        titleTrue = null;
        dataTable = [];
        th = null
    }

    const allData = {
        title: titleTrue,
        thTitle: th,
        data: dataTable
    }


    return allData
}