"use server"
import { unsealData } from "iron-session"
import { cookies } from "next/headers"
import { pwd_key_config } from "../../bin/val_global"
import prisma from "../../bin/prisma"
import _ from "lodash"
import { MasterProvinceGetAll } from "../.."

export default async function funGetUserAreaProvinsi({ idUser }: { idUser?: any }) {
    let kondisi, idUserFix

    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    if (!_.isNull(idUser) && !_.isUndefined(idUser)) {
        kondisi = {
            id: String(idUser)
        }
        idUserFix = idUser
    } else {
        kondisi = {
            id: String(dataCookies)
        }
        idUserFix = String(dataCookies)
    }

    const user = await prisma.user.findUnique({
        where: kondisi
    })

    if (user?.isAllArea == true) {
        const data = await MasterProvinceGetAll()
        const allData = data.map((v: any) => ({
            ..._.omit(v, ["id"]),
            idProvinsi: v.id,
            name: v.name
        }))

        return allData

    } else {
        const data = await prisma.userArea.findMany({
            where: {
                idUser: String(idUserFix),
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

        const allData = data.map((v: any) => ({
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