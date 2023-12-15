"use server"

import prisma from "@/modules/_global/bin/prisma"

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
            // AreaProvinsi: {
            //     select: {
            //         name: true
            //     }
            // }
        }
    })

    const allData = {
        dataUser: data,
        dataArea: dataArea
    }
    console.log(allData)

    return allData

}