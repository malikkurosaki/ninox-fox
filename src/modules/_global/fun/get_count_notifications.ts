'use server'
import { funGetUserByCookies } from "@/modules/auth"
import prisma from "../bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funGetCountNotification() {
   const user = await funGetUserByCookies()
   const can = await funGetUserDefaultFront()
   const userArea = await funGetUserDefaultFront()
   const data = await prisma.notifications.count({
      where: {
         OR: [
            {
               isActive: true,
               isRead: false,
               idUserClient: user?.id,
               idCandidate: can.idCandidate
            },
            {
               isActive: true,
               isRead: false,
               idUserClient: user?.id,
               idProvinsi: userArea.idProvinsi,
               idCandidate: null
            },
         ]
      }
   })

   return data
}