'use server'

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"


/**
 * Fungsi untuk menampilkan candidate berdasarkan area
 * @param {any} find - berisi tingkat kandidat, idprovinsi, dan idkabkot
 * @returns title & data 
 */

export default async function funGetCandidateByArea({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.tingkat == 1) {
            dataTable = await prisma.candidate.findMany({
                where: {
                    tingkat: find.tingkat,
                    idProvinsi: find.idProvinsi,
                },
                orderBy: {
                    id: 'asc'
                }
            })

            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: find.idProvinsi
                }
            })
            titleTrue = "PROVINSI " + area?.name

        } else if (find.tingkat == 2) {
            dataTable = await prisma.candidate.findMany({
                where: {
                    tingkat: find.tingkat,
                    idProvinsi: find.idProvinsi,
                    idKabkot: find.idKabkot,
                },
                orderBy: {
                    id: 'asc'
                }
            })

            area = await prisma.areaKabkot.findUnique({
                where: {
                    id: find.idKabkot
                }
            })

            titleTrue = "" + area?.name
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