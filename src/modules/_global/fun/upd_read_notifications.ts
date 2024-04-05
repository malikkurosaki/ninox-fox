'use server'
import prisma from "../bin/prisma"

export default async function funUpdReadNotifications({ id }: { id: any }) {
   const data = await prisma.notifications.update({
      where: {
         id: id,
      },
      data: {
         isRead: true,
      }
   })

   return { success: true }
}