'use server'

import prisma from "@/modules/_global/bin/prisma"
import { revalidatePath } from "next/cache"

export async function funUpdProfileImg({ id, img }: { id: number, img: string }) {
    await prisma.candidate.update({
        where: {
            id: id
        },
        data: {
            img: img
        }
    })

    // revalidatePath('/dashboard/profile/edit')

    return {
        success: true,
        message: 'Success'
    }
}