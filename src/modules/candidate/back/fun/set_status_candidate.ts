'use server'

import prisma from "@/modules/_global/bin/prisma"

/**
 * Fungsi untuk update set active candidate
 * @param {any} dataUpdate - berisi id candidate dan value active.
 * @returns success: true
 */

export default async function funSetStatusCandidate({ dataUpdate }: { dataUpdate: any }) {
    const data = await prisma.candidate.update({
        where: {
            id: dataUpdate.idCandidate
        },
        data: {
            isActive: dataUpdate.active
        }
    })

    return {
        success: true,
        message: 'Success',
        data:[]
    }
}