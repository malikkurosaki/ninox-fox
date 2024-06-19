'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetRhiFront({ candidate, area }: { candidate: any, area: any }) {
    let kondisi, tampil, result = <any>[]

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        kondisi = {
            NOT: {
                idKecamatan: null
            },
            idKabkot: Number(area),
            idKelurahan: null
        },

            tampil = {
                idKecamatan: true,
                description: true
            }
    } else if (dataC?.tingkat == 2) {
        kondisi = {
            NOT: {
                idKelurahan: null
            },
            idKecamatan: Number(area)
        }

        tampil = {
            idKelurahan: true,
            description: true
        }
    }

    const data = await prisma.regionHotIssues.findMany({
        where: kondisi,
        select: tampil
    })

    if (dataC?.tingkat == 1) {
        result = data.map((v: any) => ({
            ..._.omit(v, ["idKecamatan"]),
            idArea: v.idKecamatan,
        }))
    } else if (dataC?.tingkat == 2) {
        result = data.map((v: any) => ({
            ..._.omit(v, ["idKelurahan"]),
            idArea: v.idKelurahan,
        }))
    }

    return result
}