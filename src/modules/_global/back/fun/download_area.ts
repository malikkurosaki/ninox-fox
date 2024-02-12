'use server'
import prisma from "../../bin/prisma"
import _ from "lodash"

export default async function funDownloadArea({ cat }: { cat: string }) {
    let dataFix = <any>[], judulFix = ''

    if (cat == 'provinsi') {
        const data = await prisma.areaProvinsi.findMany({
            select: {
                id: true,
                name: true,
            },
            orderBy: {
                id: 'asc'
            }
        })

        dataFix = data.map((v: any) => ({
            ..._.omit(v, ["id", "name"]),
            idProvinsi: v.id,
            Provinsi: v.name
        }))

        judulFix = 'DATA WILAYAH - PROVINSI'

    } else if (cat == 'kabkot') {
        const data = await prisma.areaKabkot.findMany({
            select: {
                id: true,
                name: true,
                idProvinsi: true,
                AreaProvinsi: {
                    select: {
                        name: true,
                    }
                }
            },
            orderBy: {
                id: 'asc'
            }
        })

        dataFix = data.map((v: any) => ({
            ..._.omit(v, ["id", "name", "AreaProvinsi"]),
            idProvinsi: v.idProvinsi,
            idKabkot: v.id,
            Provinsi: v.AreaProvinsi.name,
            Kabkot: v.name
        }))

        judulFix = 'DATA WILAYAH - KABUPATEN KOTA'

    } else if (cat == 'kecamatan') {
        const data = await prisma.areaKecamatan.findMany({
            select: {
                id: true,
                name: true,
                idKabkot: true,
                AreaKabkot: {
                    select: {
                        name: true,
                        idProvinsi: true,
                        AreaProvinsi: {
                            select: {
                                name: true,
                            }
                        }
                    }
                }
            },
            orderBy: {
                idKabkot: 'asc'
            }
        })

        dataFix = data.map((v: any) => ({
            ..._.omit(v, ["id", "idKabkot", "name", "AreaKabkot", "AreaProvinsi"]),
            idProvinsi: v.AreaKabkot.idProvinsi,
            idKabkot: v.idKabkot,
            idKecamatan: v.id,
            Provinsi: v.AreaKabkot.AreaProvinsi.name,
            Kabkot: v.AreaKabkot.name,
            Kecamatan: v.name
        }))

        judulFix = 'DATA WILAYAH - KECAMATAN'

    } else if (cat == 'kelurahan') {
        const data = await prisma.areaKelurahan.findMany({
            select: {
                id: true,
                idKecamatan: true,
                name: true,
                AreaKecamatan: {
                    select: {
                        name: true,
                        idKabkot: true,
                        AreaKabkot: {
                            select: {
                                name: true,
                                idProvinsi: true,
                                AreaProvinsi: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                id: 'asc'
            }
        })

        dataFix = data.map((v: any) => ({
            ..._.omit(v, ["id", "idKecamatan", "name", "AreaKecamatan", "AreaKabkot", "AreaProvinsi"]),
            idProvinsi: v.AreaKecamatan.AreaKabkot.idProvinsi,
            idKabkot: v.AreaKecamatan.idKabkot,
            idKecamatan: v.idKecamatan,
            idKelurahan: v.id,
            Provinsi: v.AreaKecamatan.AreaKabkot.AreaProvinsi.name,
            Kabkot: v.AreaKecamatan.AreaKabkot.name,
            Kecamatan: v.AreaKecamatan.name,
            Kelurahan: v.name
        }))

        judulFix = 'DATA WILAYAH - KELURAHAN'
    }

    const allData = {
        title: judulFix,
        data: dataFix
    }

    return allData
}