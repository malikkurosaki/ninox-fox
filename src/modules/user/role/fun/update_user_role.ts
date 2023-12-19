"use server"

import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

export default async function funUpdateRoleUser({ name, component, id }: { name: any, component: any, id: number }) {
    await prisma.userRole.update({
        where: {
            id: id
        },
        data: {
            name: name
        },
    })

    await prisma.userAccess.deleteMany({
        where: {
            idUserRole: Number(id)
        }
    })

    for (let i of component) {
        await prisma.userAccess.create({
            data: {
                idUserRole: Number(id),
                idComponent: i,
            }
        })
    }

    revalidatePath("/dashboard/role-use")

    return {
        success: true,
        message: "Success"
    }
}