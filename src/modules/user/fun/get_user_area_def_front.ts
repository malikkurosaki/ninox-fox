"use server"
import prisma from "@/modules/_global/bin/prisma"
import { pwd_key_config } from "@/modules/auth"
import { unsealData } from "iron-session"
import { cookies } from "next/headers"

export default async function funGetUserDefaultFront() {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    const dataArea = await prisma.userArea.findFirst({
        where: {
            idUser: String(dataCookies),
            isFront: true,
        },
        select: {
            id: true,
            idKabkot: true,
            idProvinsi: true
        }
    })

    return {
        idProvinsi: dataArea?.idProvinsi,
        idKabkot: dataArea?.idKabkot,
        tingkat: (dataArea?.idKabkot == null) ? 1 : 2
    }

}