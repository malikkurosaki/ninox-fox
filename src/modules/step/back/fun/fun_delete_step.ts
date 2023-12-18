"use server"

import prisma from "@/modules/_global/bin/prisma"

/**
 * Fungsi untuk delete step
 * @param {Step} body - berisi iid
 * @returns success - true 
 */
export default async function funDeleteStep({ id }: { id: number }) {
    const update = await prisma.step.update({
        where: {
            id: id
        },
        data: {
            isActive: false
        }
    })
    return {
        success: true,
        message: "Delete Success",
    }
}