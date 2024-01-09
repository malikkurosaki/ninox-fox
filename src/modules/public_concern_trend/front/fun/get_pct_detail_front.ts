'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetPctDetailFront({ candidate, area }: { candidate: any, area: any }) {
    let result = null

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        const dataTable = await prisma.publicConcernTrendFix.findMany({
            where: {
                idKabkot: Number(area)
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

    } else if (dataC?.tingkat == 2) {
        const dataTable = await prisma.publicConcernTrendFix.findMany({
            where: {
                idKecamatan: Number(area)
            },
            select: {
                infrastruktur: true,
                keadilanSosial: true,
                kemiskinan: true,
                lapanganPekerjaan: true,
                layananKesehatan: true,
                pendidikan: true,
                idKelurahan: true,
                AreaKelurahan: {
                    select: {
                        name: true
                    }
                }
            }
        })

        const format = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaKelurahan"]),
            name: v.AreaKelurahan.name
        }))

        result = _.map(_.groupBy(format, "idKelurahan"), (v: any) => ({
            infrastruktur: _.sumBy(v, 'infrastruktur'),
            keadilanSosial: _.sumBy(v, 'keadilanSosial'),
            kemiskinan: _.sumBy(v, 'kemiskinan'),
            lapanganPekerjaan: _.sumBy(v, 'lapanganPekerjaan'),
            layananKesehatan: _.sumBy(v, 'layananKesehatan'),
            pendidikan: _.sumBy(v, 'pendidikan'),
            name: v[0].name,
            idArea: v[0].idKelurahan,
        }))
    }

    return result
}