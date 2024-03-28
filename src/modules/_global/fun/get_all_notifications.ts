'use server'
import { funGetUserByCookies } from "@/modules/auth"
import prisma from "../bin/prisma"

export default async function funGetAllNotifications() {
   const user = await funGetUserByCookies()
   const data = await prisma.notifications.findMany({
      where: {
         isActive: true,
         isRead: false,
         idUserClient: user?.id
      },
      orderBy: {
         createdAt: 'desc'
      }
   })

   return data
}