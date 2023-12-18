"use server"

import prisma from "@/modules/_global/bin/prisma"

export default async function funGetAllComponents() {
    const data = await prisma.component.findMany({
        where: {
            isActive: true
        },
        orderBy:{
            id: 'asc'
        }
    })
    return data
    
}