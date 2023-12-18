"use server"

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetAllUserRole() {
    const data = await prisma.userRole.findMany({
        where: {
            isActive: true
        },
        select: {
            id: true,
            name: true
        }
    })

    return data
}