'use server'

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma";

/**
 * Fungsi untuk menampilkan data audience berdasarkan area
 * @param {any} find - berisi idprovinsi, idkabkot, idkecamatan
 * @returns title & data 
 */

export default async function funGetLtaByArea({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.idKec == 0 && find.idKabkot == 0) {
            dataTable = []
            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: find.idProvinsi
                }
            })
            titleTrue = "PROVINSI " + area?.name

        } else if (find.idKec == 0 && find.idKabkot > 0) {
            dataTable = []
            area = await prisma.areaKabkot.findUnique({
                where: {
                    id: find.idKabkot
                }
            })
            titleTrue = "" + area?.name

        } else {
            dataTable = []
            area = await prisma.areaKecamatan.findUnique({
                where: {
                    id: find.idKec
                }
            })
            titleTrue = "KECAMATAN " + area?.name.toUpperCase()

        }

    } else {
        titleTrue = null;
        dataTable = [];
    }

    const allData = {
        title: titleTrue,
        data: dataTable
    }


    return allData
}