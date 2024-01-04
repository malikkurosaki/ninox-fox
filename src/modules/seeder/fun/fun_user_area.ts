'use server'
import prisma from "@/modules/_global/bin/prisma"
import { seederUser } from ".."
import { MasterKabGetByProvince } from "@/modules/_global"
import _ from "lodash"

export default async function funSeederUserArea() {
    for (let data of seederUser) {
        let a = 1

        await prisma.userArea.deleteMany({
            where: {
                idUser: data.id
            }
        })

        if (data.isAllArea) {
            a = 38
        }

        for (let x = 1; x <= a; x++) {
            await prisma.userArea.create({
                data: {
                    idUser: data.id,
                    idProvinsi: Number(x),
                    isFront: (x == 1) ? true : false
                }
            })

            const kab = await MasterKabGetByProvince({ idProvinsi: Number(x) })
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
        message: "Success User"
    }
}