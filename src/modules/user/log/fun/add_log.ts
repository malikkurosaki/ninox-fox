"use server"
import prisma from "@/modules/_global/bin/prisma"
import { pwd_key_config } from "@/modules/auth"
import { unsealData } from "iron-session"
import _ from "lodash"
import { cookies } from "next/headers"

export default async function funLogUser({ act, desc, idContent, tbContent }: { act: any, desc: any, idContent: any, tbContent: any }) {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })
    await prisma.userLog.create({
        data: {
            idUser: _.toString(dataCookies),
            activity: _.toString(act),
            description: _.toString(desc),
            idContent: _.toString(idContent),
            tableContent: _.toString(tbContent)
        }
    })

    // berfungsi untuk menampilkan data success, message,
    // atau proses pengembalian yang terdiri dari success, message
    return {
        success: true,
        message: 'Sukses'
    }

}
