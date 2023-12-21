"use server"

import { cookies } from "next/headers"
import { unsealData } from "iron-session"
import { pwd_key_config } from "../../bin/val_global"
import prisma from "../../bin/prisma"

export default async function funGetAreaDefault() {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    const dataArea = await prisma.userArea.findFirst({
        where: {
            idUser: String(dataCookies),
            isFront: true
        },
        select: {
            id: true,
            idKabkot: true,
            idProvinsi: true
        }
    })

    let data, hasil

    if (dataArea?.idKabkot == null) {
        data = await prisma.userArea.findFirst({
            where: {
                idUser: String(dataCookies),
                isFront: true
            },
            select: {
                AreaProvinsi: {
                    select: {
                        name: true
                    }
                }
            }
        })
        hasil = data?.AreaProvinsi?.name
    } else {
        data = await prisma.userArea.findFirst({
            where: {
                idUser: String(dataCookies),
                isFront: true
            },
            select: {
                AreaKabkot: {
                    select: {
                        name: true
                    }
                }
            }
        })

        hasil = data?.AreaKabkot?.name
    }


    return hasil



}