"use server"

import prisma from "@/modules/_global/bin/prisma"
import { seederDesa1, seederDesa2, seederDesa3 } from ".."

export async function funSeederDesa() {
    for (let data of seederDesa1){
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            }
        })
    }
    for (let data of seederDesa2){
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            }
        })
    }
    for (let data of seederDesa3){
        await prisma.areaKelurahan.upsert({
            where: {
                id: Number(data.id)
            },
            create: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            },
            update: {
                id: Number(data.id),
                idKecamatan: Number(data.masterKecamatanId),
                name: data.name
            }
        })
    }
    return {
        success : true,
        message: "Success Desa / kelurahan"
    }
}