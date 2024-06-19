"use server"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetOneConfUser({ id }: { id: any }) {
    const data = await prisma.user.findUnique({
        where: {
            isActive: true,
            id: id
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            phone: true,
            isAllArea: true,
            idUserRole: true
        }
    })

    const dataArea = await prisma.userArea.findMany({
        where: {
            idUser: id
        },
        select: {
            idProvinsi: true,
            idUser: true,
            isFront: true,
        }
    })

    const dataAreaFix = _.map(_.groupBy(dataArea, "idProvinsi"), (v: any) => ({
        idProvinsi: String(v[0].idProvinsi),
        idUser: v[0].idUser,
    }))

    const dataFront = await prisma.userArea.findFirst({
        where: {
            idUser: id,
            isFront: true,
        },
        select: {
            idProvinsi: true,
        }
    })

    const allData = {
        dataUser: data,
        dataArea: dataAreaFix,
        dataFront: dataFront
    }

    return allData

}