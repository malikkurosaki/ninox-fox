"use server"
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash";
import { revalidatePath } from "next/cache"

export default async function funAddRoleUser({ name, component }: { name: any, component: any }) {
    const data = await prisma.userRole.aggregate({
        _max: {
            id: true
        }
    });

    const idFix = (data._max.id == null) ? 1 : data?._max?.id + 1

    const role = await prisma.userRole.create({
        data: {
            name: name,
            id: idFix
        },
        select: {
            id: true
        }
    })

    for (let i of component) {
        await prisma.userAccess.create({
            data: {
                idUserRole: role.id,
                idComponent: i
            }
        })
    }

    revalidatePath("/dashboard/role-user")
    return {
        success: true,
        data: role.id,
        message: "Success"
    }



}