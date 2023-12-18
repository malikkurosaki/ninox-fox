"use server"

import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

export default async function funDeleteConfUser({ id }: { id: any }) {
    const data = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            isActive: false
        },
        select: {
            id: true,
        }
    })
    revalidatePath("/dashboard/user")

    return {
        success: true,
        message: "Success",
        delData: data
    }
}