'use server'
import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";
import _ from "lodash";

export default async function funGetFrontFasilitas({ prov, kab, kec }: { prov: any, kab?: any, kec?: any }) {
    const nProv = await provinsiCount()

    if (prov > 0 && prov <= nProv) {
        if (_.isNull(kab) && _.isNull(kec)) {
            // tingkat provinsi
            const data = await prisma.sE_Kesehatan_Fasilitas.findMany({
                where: {
                    idProvinsi: Number(prov)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idProvinsi"), (v: any) => ({
                apotek: _.sumBy(v, 'apotek'),
                bidan: _.sumBy(v, 'bidan'),
                puskesmasDgRawatInap: _.sumBy(v, 'puskesmasDgRawatInap'),
                puskesmasTnpRawatInap: _.sumBy(v, 'puskesmasTnpRawatInap'),
                rumahBersalin: _.sumBy(v, 'rumahBersalin'),
                rumahSakit: _.sumBy(v, 'rumahSakit'),
                rumahSakitBersalin: _.sumBy(v, 'rumahSakitBersalin'),
            }))

            return dataTable
        } else if (!_.isNull(kab) && _.isNull(kec)) {
            // tingkat kabkot
            const data = await prisma.sE_Kesehatan_Fasilitas.findMany({
                where: {
                    idProvinsi: Number(prov),
                    idKabkot: Number(kab)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idKabkot"), (v: any) => ({
                apotek: _.sumBy(v, 'apotek'),
                bidan: _.sumBy(v, 'bidan'),
                puskesmasDgRawatInap: _.sumBy(v, 'puskesmasDgRawatInap'),
                puskesmasTnpRawatInap: _.sumBy(v, 'puskesmasTnpRawatInap'),
                rumahBersalin: _.sumBy(v, 'rumahBersalin'),
                rumahSakit: _.sumBy(v, 'rumahSakit'),
                rumahSakitBersalin: _.sumBy(v, 'rumahSakitBersalin'),
            }))

            return dataTable
        } else {
            // tingkat kecamatan
            const data = await prisma.sE_Kesehatan_Fasilitas.findMany({
                where: {
                    idProvinsi: Number(prov),
                    idKabkot: Number(kab),
                    idKecamatan: Number(kec)
                }
            })
            const dataTable = _.map(_.groupBy(data, "idKecamatan"), (v: any) => ({
                apotek: _.sumBy(v, 'apotek'),
                bidan: _.sumBy(v, 'bidan'),
                puskesmasDgRawatInap: _.sumBy(v, 'puskesmasDgRawatInap'),
                puskesmasTnpRawatInap: _.sumBy(v, 'puskesmasTnpRawatInap'),
                rumahBersalin: _.sumBy(v, 'rumahBersalin'),
                rumahSakit: _.sumBy(v, 'rumahSakit'),
                rumahSakitBersalin: _.sumBy(v, 'rumahSakitBersalin'),
            }))

            return dataTable
        }
    }

}