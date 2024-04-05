'use server'
import { funGetUserByCookies } from "@/modules/auth"
import prisma from "../bin/prisma"

export default async function funGetCountNotification() {
   const user = await funGetUserByCookies()
   const data = await prisma.notifications.count({
      where: {
         isActive: true,
         isRead: false,
         idUserClient: user?.id
      }
   })

   return data
}