"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederUserRole } from ".."

export async function funSeederUserRole() {
    for (let data of seederUserRole) {
        await prisma.userRole.upsert({
            where: {
                id: data.id
            },
            create: {
                id: data.id,
                name: data.name
            },
            update: {
                id: data.id,
                name: data.name
            }
        })
    }

    return {
        success: true,
        message: "Success User Role"
    }
}