"use server"
import prisma from "@/modules/_global/bin/prisma"
import { seederComponents } from ".."

/**
 * Fungsi untuk ambil data seeder component.
 * @returns hasil untuk data seeder components
 */

export async function funSeederComponents() {
    for (let data of seederComponents) {
        await prisma.component.upsert({
            where: {
                id: data.id,
            },
            create: {
                id: data.id,
                owner: data.owner,
                menu: data.menu,
                group: data.group,
                keyMenu: data.keyMenu,
                link: data.link
            },
            update: {
                owner: data.owner,
                menu: data.menu,
                group: data.group,
                keyMenu: data.keyMenu,
                link: data.link
            }
        })
    }

    return {
        success: true,
        message: "Components Success"
    }

}