'use server'

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"

/**
 * Fungsi untuk menampilkan candidate berdasarkan area
 * @param {any} find - berisi tingkat kandidat, idprovinsi, dan idkabkot
 * @returns data 
 */


export default async function funGetCandidateActiveByArea({ find }: { find: any }) {
    let dataTable = <any>[]

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.tingkat == 1) {
            dataTable = await prisma.candidate.findMany({
                where: {
                    isActive: true,
                    tingkat: find.tingkat,
                    idProvinsi: find.idProvinsi
                },
                orderBy: {
                    id: 'asc'
                }
            })
        } else if (find.tingkat == 2) {
            dataTable = await prisma.candidate.findMany({
                where: {
                    isActive: true,
                    tingkat: find.tingkat,
                    idProvinsi: find.idProvinsi,
                    idKabkot: find.idKabkot
                },
                orderBy: {
                    id: 'asc'
                }
            })
        }
    } else {
        dataTable = [];
    }



    return dataTable
}