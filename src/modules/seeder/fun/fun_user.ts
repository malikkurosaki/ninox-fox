"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederUser } from ".."

export async function funSeederUser() {
    for (let data of seederUser) {
        await prisma.user.upsert({
            where: {
                id: data.id
            },
            create: {
                id: data.id,
                email: data.email,
                idUserRole: data.idUserRole,
                name: data.name,
                password: data.password,
                phone: data.phone
            },
            update: {
                id: data.id,
                email: data.email,
                idUserRole: data.idUserRole,
                name: data.name,
                password: data.password,
                phone: data.phone
            }
        })
    }

    return {
        success: true,
        message: "Success User"
    }
}