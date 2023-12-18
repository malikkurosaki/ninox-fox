"use server"
import prisma from '@/modules/_global/bin/prisma';
import { seederUserAccess } from '..';
import { UserAccess } from './../../../../node_modules/.prisma/client/index.d';

/**
 * Fungsi untuk ambil data seeder user access.
 * @returns hasil untuk data seeder user access
 */
export async function funSeederUserAccess() {
    for (let data of seederUserAccess) {
        await prisma.userAccess.upsert({
            where: {
                id: data.id
            },
            create: {
                id: data.id,
                idComponent: data.idComponent,
                idUserRole: data.idUserRole
            },
            update: {
                id: data.id,
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