"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederComponents } from ".."

export async function funSeederComponents() {
    for (let data of seederComponents) {
        await prisma.component.upsert({
            where: {
                id: data.id,
            },
            create: {
                id: data.id,
                name: data.name,
                menu: data.menu,
                label: data.label,
                keyMenu: data.keyMenu
            },
            update: {
                id: data.id,
                name: data.name,
                menu: data.menu,
                label: data.label,
                keyMenu: data.keyMenu
            }
        })
    }

    return {
        success: true,
        message: "Components Success"
    }

}