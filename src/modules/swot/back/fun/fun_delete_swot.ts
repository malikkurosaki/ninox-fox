"use server"

import prisma from "@/modules/_global/bin/prisma"
/**
 * Fungsi untuk delete swot
 * @param {Swot} id - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */
export default async function funDeleteSwot({ id }: { id: number }) {
    const update = await prisma.swot.update({
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