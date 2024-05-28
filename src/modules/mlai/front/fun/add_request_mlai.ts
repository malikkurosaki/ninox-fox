'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserByCookies } from "@/modules/auth"
import { funGetUserDefaultFront } from "@/modules/user"

export default async function funAddRequestMlAiFront({ request }: { request: any }) {
   const userLogin = await funGetUserByCookies()
   const canDef = await funGetUserDefaultFront()
   const insert = await prisma.mlAiRequest.create({
      data: {
         idUser: String(userLogin?.id),
         idCandidate: canDef.idCandidate,
         request: request,
      }
   })

   if (insert) {
      return { success: true }
   } else {
      return { success: false }
   }
}