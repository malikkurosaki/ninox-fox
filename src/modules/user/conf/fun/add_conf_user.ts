"use server"

import { MasterKabGetByProvince } from "@/modules/_global"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funAddConfUser({ data, dataArea, isFront }: { data: any, dataArea: any, isFront: any }) {
    const user = await prisma.user.create({
        data: {
            idUserRole: Number(data.idUserRole),
            name: data.name,
            email: data.email,
            password: data.password,
            phone: String(data.phone),
            isAllArea: data.isAllArea
        },
        select: {
            id: true
        }
    })

    if (!data.isAllArea) {
        for (let i of dataArea) {
            await prisma.userArea.create({
                data: {
                    idUser: user.id,
                    idProvinsi: Number(i),
                    // isFront: (isFront == Number(i) ? true : false)
                    isFront: (i == 1 ? true : false)
                }
            })
            const kab = await MasterKabGetByProvince({ idProvinsi: Number(i) })
            const wilayahTrue = kab.map((v: any) => ({
                ..._.omit(v, ["id", "idProvinsi", "name", "isActive", "createdAt", "updatedAt"]),
                idUser: user.id,
                idProvinsi: v.idProvinsi,
                idKabkot: v.id,
                isFront: false
            }));

            await prisma.userArea.createMany({
                data: wilayahTrue
            })
        }
    } else {
        await prisma.userArea.create({
            data: {
                idUser: user.id,
                idProvinsi: Number(1),
                isFront: true
            }
        })
    }

    return {
        success: true,
        message: "Success"
    }
}