'use server'
import { unsealData } from "iron-session"
import { cookies } from "next/headers"
import { pwd_key_config } from ".."
import prisma from "@/modules/_global/bin/prisma"

export default async function funGetUserByCookies() {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })


    const dataUser = await prisma.user.findUnique({
        where: {
            id: String(dataCookies)
        }
    })

    return dataUser
}