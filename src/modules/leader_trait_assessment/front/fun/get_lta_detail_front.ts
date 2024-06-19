'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetLtaDetailFront({ candidate, area }: { candidate: any, area: any }) {
    let result = <any>[]

    const dataC = await prisma.candidate.findUnique({
        where: {
            id: candidate,
            isActive: true,
        }
    })

    if (dataC?.tingkat == 1) {
        const dataTable = await prisma.leaderTraitAssessmentFix.findMany({
            where: {
                idKabkot: Number(area)
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
            }
        })

        const format = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaKecamatan"]),
            name: v.AreaKecamatan.name
        }))

        result = _.map(_.groupBy(format, "idKecamatan"), (v: any) => ({
            pekerjaKeras: _.sumBy(v, 'pekerjaKeras'),
            cerdas: _.sumBy(v, 'cerdas'),
            jujur: _.sumBy(v, 'jujur'),
            merakyat: _.sumBy(v, 'merakyat'),
            tegas: _.sumBy(v, 'tegas'),
            berpengalamanMemimpin: _.sumBy(v, 'berpengalamanMemimpin'),
            berprestasi: _.sumBy(v, 'berprestasi'),
            latarBelakangMiliter: _.sumBy(v, 'latarBelakangMiliter'),
            agamis: _.sumBy(v, 'agamis'),
            name: v[0].name,
            idArea: v[0].idKecamatan,
            total: _.sum([
                _.sumBy(v, 'pekerjaKeras'),
                _.sumBy(v, 'cerdas'),
                _.sumBy(v, 'jujur'),
                _.sumBy(v, 'merakyat'),
                _.sumBy(v, 'tegas'),
                _.sumBy(v, 'berpengalamanMemimpin'),
                _.sumBy(v, 'berprestasi'),
                _.sumBy(v, 'latarBelakangMiliter'),
                _.sumBy(v, 'agamis'),
            ])
        }))

    } else if (dataC?.tingkat == 2) {

        const dataTable = await prisma.leaderTraitAssessmentFix.findMany({
            where: {
                idKecamatan: Number(area)
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
            pekerjaKeras: _.sumBy(v, 'pekerjaKeras'),
            cerdas: _.sumBy(v, 'cerdas'),
            jujur: _.sumBy(v, 'jujur'),
            merakyat: _.sumBy(v, 'merakyat'),
            tegas: _.sumBy(v, 'tegas'),
            berpengalamanMemimpin: _.sumBy(v, 'berpengalamanMemimpin'),
            berprestasi: _.sumBy(v, 'berprestasi'),
            latarBelakangMiliter: _.sumBy(v, 'latarBelakangMiliter'),
            agamis: _.sumBy(v, 'agamis'),
            name: v[0].name,
            idArea: v[0].idKelurahan,
            total: _.sum([
                _.sumBy(v, 'pekerjaKeras'),
                _.sumBy(v, 'cerdas'),
                _.sumBy(v, 'jujur'),
                _.sumBy(v, 'merakyat'),
                _.sumBy(v, 'tegas'),
                _.sumBy(v, 'berpengalamanMemimpin'),
                _.sumBy(v, 'berprestasi'),
                _.sumBy(v, 'latarBelakangMiliter'),
                _.sumBy(v, 'agamis'),
            ])
        }))
    }

    const persen = result.map((v: any) => ({
        name: v.name,
        idArea: v.idArea,
        total: v.total,
        pekerjaKeras: (v.total == 0) ? 0 : _.round((Number(v.pekerjaKeras) / v.total) * 100, 2),
        cerdas: (v.total == 0) ? 0 : _.round((Number(v.cerdas) / v.total) * 100, 2),
        jujur: (v.total == 0) ? 0 : _.round((Number(v.jujur) / v.total) * 100, 2),
        merakyat: (v.total == 0) ? 0 : _.round((Number(v.merakyat) / v.total) * 100, 2),
        tegas: (v.total == 0) ? 0 : _.round((Number(v.tegas) / v.total) * 100, 2),
        berpengalamanMemimpin: (v.total == 0) ? 0 : _.round((Number(v.berpengalamanMemimpin) / v.total) * 100, 2),
        berprestasi: (v.total == 0) ? 0 : _.round((Number(v.berprestasi) / v.total) * 100, 2),
        latarBelakangMiliter: (v.total == 0) ? 0 : _.round((Number(v.latarBelakangMiliter) / v.total) * 100, 2),
        agamis: (v.total == 0) ? 0 : _.round((Number(v.agamis) / v.total) * 100, 2),
    }))


    return persen
}