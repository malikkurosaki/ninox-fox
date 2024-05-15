'use server'

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetAllAdmin() {

    const data = await prisma.user.findMany({
        where: {
            isActive: true,
            NOT:{
               idUserRole: 3
            }
        }
    })

    return data
}