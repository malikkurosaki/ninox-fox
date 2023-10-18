'use server'

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"


/**
 * Fungsi untuk menampilkan emotion candidate berdasarkan area, candidate dan tanggal
 * @param {any} find - berisi tingkat kandidat, idprovinsi, dan idkabkot
 * @returns title & data 
 */

export default async function funGetEmotionByCandidateAreaDate({ find }: { find: any }) {
    let titleTrue, dataTable = <any>[], area

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.tingkat == 1) {
            dataTable = await prisma.candidateEmotion.findMany({
                where: {
                    idCandidate: find.idCandidate,
                    isActive: true,
                    dateEmotion: new Date(find.date)

                },
                select: {
                    dateEmotion: true,
                    confidence: true,
                    supportive: true,
                    positive: true,
                    undecided: true,
                    unsupportive: true,
                    uncomfortable: true,
                    negative: true,
                    dissapproval: true,

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
                    idKabkot: find.idKabkot
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

    console.log(allData)


    return allData
}