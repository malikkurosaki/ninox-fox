'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserByCookies } from "@/modules/auth"
import _ from "lodash"
import { revalidatePath } from "next/cache"
import mtqq_client from "../../../_global/util/mqtt_client"

export default async function funAddNotificationsBack({ body }: { body: any }) {
   const admin = await funGetUserByCookies()
   const userArea = await prisma.userArea.findMany({
      where: {
         idCandidate: body.idCandidate,
         isFront: true
      },
      select: {
         idUser: true
      }
   })


   const listUser = userArea.map((v: any) => ({
      ..._.omit(v, ["idUser"]),
      idUserClient: v.idUser,
      idUserAdmin: (admin) ? admin.id : '',
      title: body.title,
      description: body.description,
      category: body.link,
      kategoriInput: 2,
   }));

   await prisma.notifications.createMany({
      data: listUser
   })


   // const insert = await prisma.notifications.create({
   //    data: {
   //       idUserAdmin: String(admin),
   //       idUserClient: '',
   //       title: body.title,
   //       description: body.description,
   //       category: body.link,
   //       kategoriInput: 2,
   //    }
   // })

   for (let index = 0; index < listUser.length; index++) {
      const user = listUser[index].idUserClient
      const title = listUser[index].title
      const desc = listUser[index].description
      mtqq_client.publish("app_ninox_fox", JSON.stringify({
         "user": user,
         "title": title,
         "description": desc
      }))
   }

   revalidatePath('/dashboard/notifikasi')

   return { success: true, message: 'Berhasil' }
}