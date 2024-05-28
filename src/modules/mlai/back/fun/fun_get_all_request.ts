'use server'
import prisma from "@/modules/_global/bin/prisma"
import _, { ceil } from "lodash";
import moment from "moment";

export default async function funGetAllRequestMlai({ page, status, search }: { page: any, status: any, search?: any }) {
   const dataSkip = _.toNumber(page) * 25 - 25;
   const data = await prisma.mlAiRequest.findMany({
      skip: dataSkip,
      take: 25,
      where: {
         isActive: true,
         status: status,
         request: {
            contains: search,
            mode: 'insensitive'
         }
      },
      select: {
         id: true,
         request: true,
         status: true,
         createdAt: true,
         idCandidate: true,
         User: {
            select: {
               name: true,
            }
         },
         MlAi: {
            select: {
               id: true,
               content: true,
            }
         }
      },
      orderBy: {
         createdAt: 'desc'
      }
   })

   const result = data.map((v: any) => ({
      ..._.omit(v, ['User', 'createdAt', 'MlAi']),
      name: v.User.name,
      date: moment(v.createdAt).format('LLL'),
      response: v.MlAi[0]?.content,
      idMlAi: v.MlAi[0]?.id
   }))


   const nData = await prisma.mlAiRequest.count({
      where: {
         isActive: true,
         status: status,
         request: {
            contains: search,
            mode: 'insensitive'
         }
      }
   })

   const allData = {
      data: result,
      total: nData,
      nPage: ceil(nData / 25)
   }


   return allData
}