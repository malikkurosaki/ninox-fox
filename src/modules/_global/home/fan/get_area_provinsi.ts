"use server"
import { unsealData } from "iron-session"
import { cookies } from "next/headers"
import { pwd_key_config } from "../../bin/val_global"
import prisma from "../../bin/prisma"
import _ from "lodash"
import { MasterProvinceGetAll } from "../.."

export default async function funGetUserAreaProvinsi() {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    const user = await prisma.user.findUnique({
        where: {
            id: String(dataCookies)
        }
    })

    if (user?.isAllArea == true) {
        const data = await MasterProvinceGetAll()
        const allData = data.map((v) => ({
            ..._.omit(v, ["id"]),
            idProvinsi: v.id,
            name: v.name
        }))
        
        return allData

    } else {
        const data = await prisma.userArea.findMany({
            where: {
                idUser: String(dataCookies),
                isActive: true
            },
            select: {
                idProvinsi: true,
                AreaProvinsi: {
                    select: {
                        name: true
                    }
                }
            }

        })

        const allData = data.map((v) => ({
            ..._.omit(v, ["AreaProvinsi"]),
            idProvinsi: v.idProvinsi,
            name: v.AreaProvinsi?.name
        }))

        const group = _.map(_.groupBy(allData, "idProvinsi"), (v: any) => ({
            idProvinsi: v[0].idProvinsi,
            name: v[0].name
        }))


        return group
    }


}