'use server'
import { funGetUserByCookies } from "@/modules/auth"
import prisma from "../bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funGetAllNotifications() {
   const user = await funGetUserByCookies()
   const can = await funGetUserDefaultFront()
   const userArea = await funGetUserDefaultFront()
   // const data = await prisma.notifications.findMany({
   //    where: {
   //       isActive: true,
   //       isRead: false,
   //       idUserClient: user?.id
   //    },
   //    orderBy: {
   //       createdAt: 'desc'
   //    }
   // })

   const data = await prisma.notifications.findMany({
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
      },
      orderBy: {
         createdAt: 'desc'
      }
   })

   const dataRead = await prisma.notifications.findMany({
      where: {
         OR: [
            {
               isActive: true,
               isRead: true,
               idUserClient: user?.id,
               idCandidate: can.idCandidate
            },
            {
               isActive: true,
               isRead: true,
               idUserClient: user?.id,
               idProvinsi: userArea.idProvinsi,
               idCandidate: null
            },
         ]
      },
      orderBy: {
         createdAt: 'desc'
      }
   })


   const allData = {
      trueRead : dataRead,
      falseRead : data
   }


   return allData
}