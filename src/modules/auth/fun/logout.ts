'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function funLogout() {

    // menghapus cookies
    cookies().delete('_cookiesNinox')

    return redirect("/")
}