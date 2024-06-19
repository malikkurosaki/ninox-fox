'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetOneRhi({ id }: { id: any }) {
    const data = await prisma.regionHotIssues.findUnique({
        where: {
            id: Number(id)
        },
        select: {
            id: true,
            description: true,
            idProvinsi: true,
            AreaProvinsi: {
                select: {
                    name: true
                }
            },
            AreaKabkot: {
                select: {
                    name: true
                }
            },
            AreaKecamatan: {
                select: {
                    name: true
                }
            },
            AreaKelurahan: {
                select: {
                    name: true
                }
            }
        }
    })

    const result = {
        id: data?.id,
        description: data?.description,
        idProvinsi: data?.idProvinsi,
        areaProvinsi: _.isUndefined(data?.AreaProvinsi?.name) ? null : data?.AreaProvinsi?.name,
        areaKabkot: _.isUndefined(data?.AreaKabkot?.name) ? null : data?.AreaKabkot?.name,
        areaKecamatan: _.isUndefined(data?.AreaKecamatan?.name) ? null : data?.AreaKecamatan?.name,
        areaKelurahan: _.isUndefined(data?.AreaKelurahan?.name) ? null : data?.AreaKelurahan?.name,
    }

    return result
}