'use server'
import { unsealData } from "iron-session"
import { cookies } from "next/headers"
import { pwd_key_config } from "../../bin/val_global"
import prisma from "../../bin/prisma"
import _ from "lodash"

export default async function funGetAccessAdmin() {

    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })


    const dataUser = await prisma.user.findUnique({
        where: {
            id: String(dataCookies)
        }
    })

    const dataComponent = await prisma.userAccess.findMany({
        where: {
            idUserRole: dataUser?.idUserRole
        },
        select: {
            Component: {
                select: {
                    menu: true,
                    group: true,
                    keyMenu: true,
                    link: true,
                    owner: true
                }
            }
        }
    })

    const dataOmit = dataComponent.map((v: any) => ({
        ..._.omit(v, ["Component"]),
        menu: v.Component.menu,
        group: v.Component.group,
        keyMenu: v.Component.keyMenu,
        link: v.Component.link,
        owner: v.Component.owner
    }))

    const dataGroup = _.groupBy(
        dataOmit, (v) => v.group
      )

    return dataGroup

}