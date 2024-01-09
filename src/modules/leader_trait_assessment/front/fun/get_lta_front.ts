'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"

export default async function funGetLtaFront() {
    let result = <any>[]

    const def = await funGetUserDefaultFront()
    if (def.tingkat == 1) {
        const dataTable = await prisma.leaderTraitAssessmentFix.findMany({
            where: {
                idProvinsi: def.idProvinsi
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
            }
        })

        const format = dataTable.map((v: any) => ({
            ..._.omit(v, ["AreaKabkot"]),
            name: v.AreaKabkot.name
        }))

        result = _.map(_.groupBy(format, "idKabkot"), (v: any) => ({
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
            idArea: v[0].idKabkot,
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

    } else if (def.tingkat == 2) {
        const dataTable = await prisma.leaderTraitAssessmentFix.findMany({
            where: {
                idKabkot: def.idKabkot
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
    }

    const persen = result.map((v: any) => ({
        name: v.name,
        idArea: v.idArea,
        total: v.total,
        pekerjaKeras: _.round((Number(v.pekerjaKeras) / v.total) * 100, 2),
        cerdas: _.round((Number(v.cerdas) / v.total) * 100, 2),
        jujur: _.round((Number(v.jujur) / v.total) * 100, 2),
        merakyat: _.round((Number(v.merakyat) / v.total) * 100, 2),
        tegas: _.round((Number(v.tegas) / v.total) * 100, 2),
        berpengalamanMemimpin: _.round((Number(v.berpengalamanMemimpin) / v.total) * 100, 2),
        berprestasi: _.round((Number(v.berprestasi) / v.total) * 100, 2),
        latarBelakangMiliter: _.round((Number(v.latarBelakangMiliter) / v.total) * 100, 2),
        agamis: _.round((Number(v.agamis) / v.total) * 100, 2),
    }))

    return persen
}