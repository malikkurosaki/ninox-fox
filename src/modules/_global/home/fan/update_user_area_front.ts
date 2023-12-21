"use server"

import { cookies } from "next/headers"
import prisma from "../../bin/prisma"
import { unsealData } from "iron-session"
import { pwd_key_config } from "../../bin/val_global"
import _ from "lodash"
import { revalidatePath } from "next/cache"

export default async function funUpdateUserArea({ provinsi, kabkot }: { provinsi: any, kabkot: any }) {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    const dataAll = await prisma.userArea.updateMany({
        where: {
            idUser: String(dataCookies),

        },
        data: {
            isFront: false
        }
    })


    await prisma.userArea.updateMany({
        where: {
            idUser: String(dataCookies),
            idProvinsi: Number(provinsi),
            idKabkot: (_.isNull(kabkot)) ? null : Number(kabkot)
        },
        data: {
            isFront: true
        }
    })

    return {
        success: true,
        message: "Success"
    }
}