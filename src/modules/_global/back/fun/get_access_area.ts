"use server"
import { unsealData } from "iron-session"
import { cookies } from "next/headers"
import { pwd_key_config } from "../../bin/val_global"
import prisma from "../../bin/prisma"
import _ from "lodash"

// isinya paramater = id provinsi? & candidate?
// id user di ambil dari cookis
// table user == finduniqe , where id user = cookies (select= isallarea)
// if isallarea == true return true

// if idProvinsi==null, maka cari idProvinsi di table candidate
// table candidate == finduniqe, where idcandidate = candidate di parameter (select= idprovinsi)

// table user area == count => whare : iduser dan id provinsi
// if (count > 0 return true)
// else retun false

export default async function funGetAccessArea({ provinsi, candidate }: { provinsi?: any, candidate?: any }) {
    const c = cookies().get("_cookiesNinox")
    const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })

    const dataUser = await prisma.user.findUnique({
        where: {
            id: String(dataCookies)
        },
        select: {
            id: true,
            isAllArea: true,
        }
    })


    if (dataUser?.isAllArea == true) {
        return true
    }


    if (_.isNull(provinsi) || _.isUndefined(provinsi)) {
        const dataCandidate = await prisma.candidate.findUnique({
            where: {
                id: String(candidate)
            },
            select: {
                id: true,
                idProvinsi: true
            }
        })

        provinsi = dataCandidate?.idProvinsi
    }



    const dataArea = await prisma.userArea.count({
        where: {
            idProvinsi: Number(provinsi),
            idUser: dataUser?.id
        },
    })

    if (dataArea > 0) {
        return true;
    } else {
        return false
    }
}