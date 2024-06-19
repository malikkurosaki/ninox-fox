"use server"
import { cookies } from "next/headers"
import prisma from "../../bin/prisma"
import { unsealData } from "iron-session"
import { pwd_key_config } from "../../bin/val_global"
import _ from "lodash"
import { revalidatePath } from "next/cache"

export default async function funUpdateUserArea({ provinsi, kabkot, candidate, user }: { provinsi: any, kabkot: any, candidate: any, user?: any }) {
    let userfix

    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    if (!_.isNull(user) && !_.isUndefined(user)) {
        userfix = user
    } else {
        userfix = dataCookies
    }

    const dataAll = await prisma.userArea.updateMany({
        where: {
            idUser: String(userfix)
        },
        data: {
            isFront: false,
            idCandidate: null
        }
    })


    await prisma.userArea.updateMany({
        where: {
            idUser: String(userfix),
            idProvinsi: Number(provinsi),
            idKabkot: (_.isNull(kabkot)) ? null : Number(kabkot)
        },
        data: {
            isFront: true,
            idCandidate: candidate
        }
    })

    revalidatePath('/dashboard/user')

    return {
        success: true,
        message: "Success"
    }
}