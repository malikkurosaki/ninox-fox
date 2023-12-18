"use server"

import prisma from "@/modules/_global/bin/prisma"

export default async function funUpdateConfUser({data, dataArea, isFront}: {data: any, dataArea: any, isFront: any}) {
    await prisma.user.update({
        where: {
            id: data.id
        },
        data: {
            idUserRole: Number(data.idUserRole),
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            isAllArea: data.isAllArea
        }
    })

    await prisma.userArea.deleteMany({
        where: {
            idUser: data.id
        }
    })
    for (let i of dataArea) {
        await prisma.userArea.create({
            data:{
                idUser: data.id,
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