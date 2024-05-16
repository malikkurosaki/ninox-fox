'use server'
import prisma from "@/modules/_global/bin/prisma";
import _, { ceil } from "lodash";

export default async function funGetAllNotifikasiBack({ page, admin }: { page: any, admin?: any }) {
   const dataSkip = _.toNumber(page) * 25 - 25;
   let kondisi

   if (admin != null && admin != undefined && admin != '') {
      kondisi = {
         isActive: true,
         kategoriInput: 2,
         idUserAdmin: admin
      }
   } else {
      kondisi = {
         isActive: true,
         kategoriInput: 2,
      }
   }

   const data = await prisma.notifications.findMany({
      skip: dataSkip,
      take: 25,
      where: kondisi,
      select: {
         title: true,
         description: true,
         createdAt: true,
         category: true,
         isRead: true,
         User1: {
            select: {
               name: true,
            }
         },
         User2: {
            select: {
               name: true,
            }
         }
      },
      orderBy: {
         createdAt: 'desc',
      }
   })

   const result = data.map((v) => ({
      ..._.omit(v, ['User1', 'User2']),
      user: v.User1.name,
      admin: v.User2.name,

   }))

   const nData = await prisma.notifications.count({
      where: kondisi
   })

   const allData = {
      data: result,
      nPage: ceil(nData / 25)
   }

   return allData
}