'use server'
import { Candidate } from '@prisma/client';

import { provinsiCount } from "@/modules/_global";
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetAllMlAi({ find }: { find: any }) {

    let titleTrue, dataTable = <any>[], area

    const nProv = await provinsiCount();

    if (find.idProvinsi > 0 && find.idProvinsi <= nProv) {
        if (find.tingkat == 1) {
            dataTable = await prisma.mlAi.findMany({
                select: {
                    id: true,
                    content: true,
                    Candidate: {
                        select: {
                            name: true,
                            id: true
                        },
                    },
                },
                where: {
                    isActive: true,
                    Candidate: {
                        isActive: true,
                        tingkat: find.tingkat,
                        idProvinsi: find.idProvinsi
                    }
                }
            })

            area = await prisma.areaProvinsi.findUnique({
                where: {
                    id: find.idProvinsi
                }
            })
            titleTrue = "PROVINSI " + area?.name

        } else if (find.tingkat == 2) {
            dataTable = await prisma.mlAi.findMany({
                select: {
                    id: true,
                    content: true,
                    Candidate: {
                        select: {
                            name: true,
                            id: true
                        },
                    },
                },
                where: {
                    isActive: true,
                    Candidate: {
                        isActive: true,
                        tingkat: find.tingkat,
                        idProvinsi: find.idProvinsi,
                        idKabkot: find.idKabkot
                    }
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


    const result = dataTable.map((v: any) => ({
        ..._.omit(v, ["Candidate"]),
        name: v.Candidate?.name,
        idCandidate: v.Candidate.id
    }));

    const allData = {
        title: titleTrue,
        data: result
    }
    // console.log(allData)
    return allData
}