"use server"
import { MasterKabGetByProvince } from "@/modules/_global"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"

export default async function funUpdateConfUser({ data, dataArea, isFront }: { data: any, dataArea: any, isFront: any }) {
    await prisma.user.update({
        where: {
            id: data.id
        },
        data: {
            idUserRole: Number(data.idUserRole),
            name: data.name,
            email: data.email,
            password: data.password,
            phone: String(data.phone),
            isAllArea: data.isAllArea
        }
    })

    await prisma.userArea.deleteMany({
        where: {
            idUser: data.id
        }
    })

    if (!data.isAllArea) {
        for (let i of dataArea) {
            await prisma.userArea.create({
                data: {
                    idUser: data.id,
                    idProvinsi: Number(i),
                    isFront: (isFront == Number(i) ? true : false)
                }
            })
        }
    } else {
        for (let i = 1; i <= 38; i++) {
            await prisma.userArea.create({
                data: {
                    idUser: data.id,
                    idProvinsi: Number(i),
                    isFront: (i == 1 ? true : false)
                }
            })

            const kab = await MasterKabGetByProvince({ idProvinsi: Number(i) })
            const wilayahTrue = kab.map((v: any) => ({
                ..._.omit(v, ["id", "idProvinsi", "name", "isActive", "createdAt", "updatedAt"]),
                idUser: data.id,
                idProvinsi: v.idProvinsi,
                idKabkot: v.id,
                isFront: false
            }));

            await prisma.userArea.createMany({
                data: wilayahTrue
            })
        }
    }

    return {
        success: true,
        message: "Success"
    }
}