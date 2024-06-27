'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"

export default async function funGetPctFront() {
    let result = null

    const def = await funGetUserDefaultFront()
    if (def.tingkat == 1) {
        const dataTable = await prisma.publicConcernTrendFix.findMany({
            where: {
                idProvinsi: def.idProvinsi
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

        const format = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaKabkot"]),
            name: v.AreaKabkot.name
        }))

        result = _.map(_.groupBy(format, "idKabkot"), (v: any) => ({
            infrastruktur: _.sumBy(v, 'infrastruktur'),
            keadilanSosial: _.sumBy(v, 'keadilanSosial'),
            kemiskinan: _.sumBy(v, 'kemiskinan'),
            lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
            layananKesehatan: _.sumBy(v, 'layananKesehatan'),
            pendidikan: _.sumBy(v, 'pendidikan'),
            name: v[0].name,
            idArea: v[0].idKabkot,
        }))

    } else if (def.tingkat == 2) {
        const dataTable = await prisma.publicConcernTrendFix.findMany({
            where: {
                idKabkot: def.idKabkot
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

        const format = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaKecamatan"]),
            name: v.AreaKecamatan.name
        }))

        result = _.map(_.groupBy(format, "idKecamatan"), (v: any) => ({
            infrastruktur: _.sumBy(v, 'infrastruktur'),
            keadilanSosial: _.sumBy(v, 'keadilanSosial'),
            kemiskinan: _.sumBy(v, 'kemiskinan'),
            lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
            layananKesehatan: _.sumBy(v, 'layananKesehatan'),
            pendidikan: _.sumBy(v, 'pendidikan'),
            name: v[0].name,
            idArea: v[0].idKecamatan,
        }))
    }

    return result
}