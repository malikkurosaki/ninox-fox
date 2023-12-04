'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash"


export default async function funGetPctByArea({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area, th

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.idKec == 0 && find.idKabkot == 0) {
            dataTable = await prisma.publicConcernTrendFix.findMany({
                where: {
                    idProvinsi: find.idProvinsi
                },
                select: {
                    infrastruktur: true,
                    keadilanSosial: true,
                    kemiskinan: true,
                    lapanganPekerjaan: true,
                    layananKesehatan: true,
                    pendidikan: true,
                    idKabkot: true,
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

            dataTable = _.map(_.groupBy(dataTable, "idKabkot"), (v: any) => ({
                infrastruktur: _.sumBy(v, 'infrastruktur'),
                keadilanSosial: _.sumBy(v, 'keadilanSosial'),
                kemiskinan: _.sumBy(v, 'kemiskinan'),
                lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
                layananKesehatan: _.sumBy(v, 'layananKesehatan'),
                pendidikan: _.sumBy(v, 'pendidikan'),
                name: v[0].name
            }))

            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: find.idProvinsi
                }
            })
            titleTrue = "PROVINSI " + area?.name
            th = "KABUPATEN/KOTA"

        } else if (find.idKec == 0 && find.idKabkot > 0) {
            dataTable = await prisma.publicConcernTrendFix.findMany({
                where: {
                    idKabkot: find.idKabkot
                },
                select: {
                    infrastruktur: true,
                    keadilanSosial: true,
                    kemiskinan: true,
                    lapanganPekerjaan: true,
                    layananKesehatan: true,
                    pendidikan: true,
                    idKecamatan: true,
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

            dataTable = _.map(_.groupBy(dataTable, "idKecamatan"), (v: any) => ({
                infrastruktur: _.sumBy(v, 'infrastruktur'),
                keadilanSosial: _.sumBy(v, 'keadilanSosial'),
                kemiskinan: _.sumBy(v, 'kemiskinan'),
                lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
                layananKesehatan: _.sumBy(v, 'layananKesehatan'),
                pendidikan: _.sumBy(v, 'pendidikan'),
                name: v[0].name
            }))

            area = await prisma.areaKabkot.findUnique({
                where: {
                    id: find.idKabkot
                }
            })
            titleTrue = "" + area?.name
            th = "KECAMATAN"

        } else {
            dataTable = await prisma.publicConcernTrendFix.findMany({
                where: {
                    idKecamatan: find.idKec
                },
                select: {
                    infrastruktur: true,
                    keadilanSosial: true,
                    kemiskinan: true,
                    lapanganPekerjaan: true,
                    layananKesehatan: true,
                    pendidikan: true,
                    AreaKelurahan: {
                        select: {
                            name: true,
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
        dataTable = await prisma.publicConcernTrendFix.findMany({
            select: {
                infrastruktur: true,
                keadilanSosial: true,
                kemiskinan: true,
                lapanganPekerjaan: true,
                layananKesehatan: true,
                pendidikan: true,
                idProvinsi: true,
                AreaProvinsi: {
                    select: {
                        name: true
                    }
                }
            }
        })

        dataTable = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaProvinsi"]),
            name: v.AreaProvinsi.name
        }))

        dataTable = _.map(_.groupBy(dataTable, "idProvinsi"), (v: any) => ({
            infrastruktur: _.sumBy(v, 'infrastruktur'),
            keadilanSosial: _.sumBy(v, 'keadilanSosial'),
            kemiskinan: _.sumBy(v, 'kemiskinan'),
            lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
            layananKesehatan: _.sumBy(v, 'layananKesehatan'),
            pendidikan: _.sumBy(v, 'pendidikan'),
            name: v[0].name
        }))


        titleTrue = "SELURUH INDONESIA"
        th= "PROVINSI"
    }

    const allData = {
        title: titleTrue,
        thTitle: th,
        data: dataTable,
    }


    return allData
}