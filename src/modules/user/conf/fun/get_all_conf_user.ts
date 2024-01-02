"use server"

import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funGetAllConfUser() {
    const dataUser = await prisma.user.findMany({
        where: {
            isActive: true
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            phone: true,
            isAllArea: true,
            UserRole: {
                select: {
                    name: true
                }
            }
        }
    })

    const dataArea = await prisma.userArea.findMany({
        select: {
            idProvinsi: true,
            idUser: true,
            isFront: true,
            AreaProvinsi: {
                select: {
                    name: true
                }
            }
        }
    })

    const dataOmitArea = dataArea.map((item) => ({
        ..._.omit(item, ["AreaProvinsi"]),
        area: item.AreaProvinsi?.name
    }))



    const dataOmitUser = dataUser.map((item) => ({
        ..._.omit(item, ["user"], ['userArea']),
        name: item.name,
        email: item.email,
        password: item.password,
        phone: item.phone,
        isAllArea: item.isAllArea,
        UserArea: dataOmitArea.filter((i: any) => i.idUser === item.id),
        UserRole: item.UserRole,
    }))

    return dataOmitUser
}