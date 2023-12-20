"use server"

import prisma from "@/modules/_global/bin/prisma"

export default async function funAddConfUser({data, dataArea, isFront}: {data: any, dataArea: any, isFront: any}) {
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

    for (let i of dataArea) {
        await prisma.userArea.create({
            data:{
                idUser: user.id,
                idProvinsi: Number(i),
                isFront: (isFront == Number(i) ? true : false)
            }
        })
    }

    return {
        success: true,
        message: "Success"
    }
}