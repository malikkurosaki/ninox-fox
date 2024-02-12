'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";

export default async function funGetFrontPenipuanDanPenggelapan({ prov, kab, kec }: { prov: any, kab?: any, kec?: any }) {
    const nProv = await provinsiCount()

    if (prov > 0 && prov <= nProv) {
        if (_.isNull(kab) && _.isNull(kec)) {
            // tingkat provinsi
            const data = await prisma.sE_Keamanan_PenipuanDanPenggelapan.findMany({
                where: {
                    idProvinsi: Number(prov)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idProvinsi"), (v: any) => ({
                meningkat: _.sumBy(v, 'meningkat'),
                menurun: _.sumBy(v, 'menurun')
            }))

            return dataTable
        } else if (!_.isNull(kab) && _.isNull(kec)) {
            // tingkat kabkot
            const data = await prisma.sE_Keamanan_PenipuanDanPenggelapan.findMany({
                where: {
                    idProvinsi: Number(prov),
                    idKabkot: Number(kab)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idKabkot"), (v: any) => ({
                meningkat: _.sumBy(v, 'meningkat'),
                menurun: _.sumBy(v, 'menurun')
            }))

            return dataTable
        } else {
            // tingkat kecamatan
            const data = await prisma.sE_Keamanan_PenipuanDanPenggelapan.findMany({
                where: {
                    idProvinsi: Number(prov),
                    idKabkot: Number(kab),
                    idKecamatan: Number(kec)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idKecamatan"), (v: any) => ({
                meningkat: _.sumBy(v, 'meningkat'),
                menurun: _.sumBy(v, 'menurun')
            }))

            return dataTable
        }
    }

}