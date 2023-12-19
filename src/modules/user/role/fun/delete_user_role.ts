"use server"

import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

export default async function funDelRoleUser({ id }: { id: any }) {
    const data = await prisma.userRole.update({
        where: {
            id: id
        },
        data: {
            isActive: false
        },
        select: {
            id: true,
            name: true
        }
    })

    revalidatePath("/dashboard/role-user")

    return {
        success: true,
        message: "Success",
        delData: data
    }
}