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
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

    const dataOmitUser = dataUser.map((item) => ({
        ..._.omit(item, ["UserRole"]),
        role: item.UserRole?.name
    }))

    const dataArea = await prisma.userArea.findMany({
        where: {
            isFront: true,
        },
        select: {
            idUser: true,
            isFront: true,
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
            Candidate: {
                select: {
                    name: true
                }
            }
        }
    })

    const dataOmitArea = dataArea.map((item) => ({
        ..._.omit(item, ["AreaProvinsi", "AreaKabkot", "Candidate"]),
        area: (item.AreaKabkot == undefined) ? item.AreaProvinsi?.name : item.AreaKabkot?.name,
        candidate: item.Candidate?.name,
    }))



    const dataFix = dataOmitUser.map((item) => ({
        ..._.omit(item, ["user", "role"]),
        name: item.name,
        email: item.email,
        password: item.password,
        phone: item.phone,
        isAllArea: item.isAllArea,
        userArea: dataOmitArea.filter((i: any) => i.idUser === item.id)[0],
        userRole: item.role,
    }))


    return dataFix
}