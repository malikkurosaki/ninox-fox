"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederPublic } from ".."

/**
 * Fungsi untuk ambil data seeder public.
 * @returns hasil untuk data seeder public
 */
export async function funSeederPublic() {
    for (let data of seederPublic) {
        await prisma.categoryPublicConcernTrend.upsert({
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
        message: "Cetegory public Success"
    }

}