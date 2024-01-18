"use server"
import { MasterKabGetByProvince } from "@/modules/_global"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"
import { revalidatePath } from "next/cache"

export default async function funAddConfUser({ data, dataArea }: { data: any, dataArea: any }) {
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
        for (let i = 1; i <= 38; i++) {
            await prisma.userArea.create({
                data: {
                    idUser: user.id,
                    idProvinsi: Number(i),
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
    }

    return {
        success: true,
        message: "Success"
    }
}