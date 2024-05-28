'use server'
import prisma from '@/modules/_global/bin/prisma';
import { funGetUserByCookies } from '@/modules/auth';

// todo: belom default wilayah
export default async function funGetLogRequestMlaiFront() {
   const user = await funGetUserByCookies()

   const data = await prisma.mlAiRequest.findMany({
      where: {
         idUser: user?.id
      },
      orderBy: {
         createdAt: 'desc'
      }
   })

   return data
}