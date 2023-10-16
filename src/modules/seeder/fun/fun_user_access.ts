"use server"
import prisma from '@/modules/_global/bin/prisma';
import { seederUserAccess } from '..';
import { UserAccess } from './../../../../node_modules/.prisma/client/index.d';

export async function funSeederUserAccess() {
    for (let data of seederUserAccess) {
        await prisma.userAccess.upsert({
            where: {
                id: String(data.id)
            },
            create: {
                id: String(data.id),
                idComponent: data.idComponent,
                idUserRole: data.idUserRole
            },
            update: {
                id: String(data.id),
                idComponent: data.idComponent,
                idUserRole: data.idUserRole
            }

        })
    }
    return {
        success: true,
        message: "Success User Access"
    }
}