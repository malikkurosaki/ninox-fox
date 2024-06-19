'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";

/**
 * Fungsi untuk menampilkan data audience berdasarkan area
 * @param {any} find - berisi idprovinsi, idkabkot, idkecamatan
 * @returns title & data 
 */

export default async function funGetLtaByArea({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area, th

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.idKec == 0 && find.idKabkot == 0) {
            dataTable = await prisma.leaderTraitAssessmentFix.findMany({
                where: {
                    idProvinsi: find.idProvinsi
                },
                select: {
                    pekerjaKeras: true,
                    cerdas: true,
                    jujur: true,
                    merakyat: true,
                    tegas: true,
                    berpengalamanMemimpin: true,
                    berprestasi: true,
                    latarBelakangMiliter: true,
                    agamis: true,
                    idKabkot: true,
                    AreaKabkot: {
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
                ..._.omit(v, ["AreaKabkot"]),
                name: v.AreaKabkot.name
            }))

            dataTable = _.map(_.groupBy(dataTable, "idKabkot"), (v: any) => ({
                pekerjaKeras: _.sumBy(v, 'pekerjaKeras'),
                cerdas: _.sumBy(v, 'cerdas'),
                jujur: _.sumBy(v, 'jujur'),
                merakyat: _.sumBy(v, 'merakyat'),
                tegas: _.sumBy(v, 'tegas'),
                berpengalamanMemimpin: _.sumBy(v, 'berpengalamanMemimpin'),
                berprestasi: _.sumBy(v, 'berprestasi'),
                latarBelakangMiliter: _.sumBy(v, 'latarBelakangMiliter'),
                agamis: _.sumBy(v, 'agamis'),
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
            dataTable = await prisma.leaderTraitAssessmentFix.findMany({
                where: {
                    idKabkot: find.idKabkot
                },
                select: {
                    pekerjaKeras: true,
                    cerdas: true,
                    jujur: true,
                    merakyat: true,
                    tegas: true,
                    berpengalamanMemimpin: true,
                    berprestasi: true,
                    latarBelakangMiliter: true,
                    agamis: true,
                    idKecamatan: true,
                    AreaKecamatan: {
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
                ..._.omit(v, ["AreaKecamatan"]),
                name: v.AreaKecamatan.name
            }))

            dataTable = _.map(_.groupBy(dataTable, "idKecamatan"), (v: any) => ({
                pekerjaKeras: _.sumBy(v, 'pekerjaKeras'),
                cerdas: _.sumBy(v, 'cerdas'),
                jujur: _.sumBy(v, 'jujur'),
                merakyat: _.sumBy(v, 'merakyat'),
                tegas: _.sumBy(v, 'tegas'),
                berpengalamanMemimpin: _.sumBy(v, 'berpengalamanMemimpin'),
                berprestasi: _.sumBy(v, 'berprestasi'),
                latarBelakangMiliter: _.sumBy(v, 'latarBelakangMiliter'),
                agamis: _.sumBy(v, 'agamis'),
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
            dataTable = await prisma.leaderTraitAssessmentFix.findMany({
                where: {
                    idKecamatan: find.idKec
                },
                select: {
                    pekerjaKeras: true,
                    cerdas: true,
                    jujur: true,
                    merakyat: true,
                    tegas: true,
                    berpengalamanMemimpin: true,
                    berprestasi: true,
                    latarBelakangMiliter: true,
                    agamis: true,
                    AreaKelurahan: {
                        select: {
                            name: true,
                        }
                    }
                },
                orderBy: {
                    id: 'asc'
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
        dataTable = await prisma.leaderTraitAssessmentFix.findMany({
            select: {
                pekerjaKeras: true,
                cerdas: true,
                jujur: true,
                merakyat: true,
                tegas: true,
                berpengalamanMemimpin: true,
                berprestasi: true,
                latarBelakangMiliter: true,
                agamis: true,
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
            pekerjaKeras: _.sumBy(v, 'pekerjaKeras'),
            cerdas: _.sumBy(v, 'cerdas'),
            jujur: _.sumBy(v, 'jujur'),
            merakyat: _.sumBy(v, 'merakyat'),
            tegas: _.sumBy(v, 'tegas'),
            berpengalamanMemimpin: _.sumBy(v, 'berpengalamanMemimpin'),
            berprestasi: _.sumBy(v, 'berprestasi'),
            latarBelakangMiliter: _.sumBy(v, 'latarBelakangMiliter'),
            agamis: _.sumBy(v, 'agamis'),
            name: v[0].name
        }))

        titleTrue = "SELURUH INDONESIA"
        th = "PROVINSI"
    }

    const allData = {
        title: titleTrue,
        thTitle: th,
        data: dataTable,
    }



    return allData
}