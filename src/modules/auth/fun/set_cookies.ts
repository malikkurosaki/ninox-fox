'use server'
import prisma from "@/modules/_global/bin/prisma"
import { sealData } from "iron-session"
import { cookies } from 'next/headers'
import { pwd_key_config } from ".."
import { redirect } from "next/navigation"

/**
 * Setting cookies setelah login dan verification berhasil
 * @param user id user
 * @returns array data success dan message
 */

export async function funSetCookies({ user }: { user: string }) {

    // menyimpan dan mengunci data id user
    const tkn = await sealData(user, { password: pwd_key_config as string })
    // const tkn = await sealData(
    //     {
    //         cName: dataUser?.name,
    //         cIdUser: dataUser?.id,
    //         cIdRoleUser: dataUser?.idUserRole
    //     },
    //     { password: pwd_key_config as string })



    // set cookies yg berisi data yang telah dikunci
    cookies().set(
        {
            name: "_cookiesNinox",
            value: tkn
        }
    )


    return redirect('/summary')
}