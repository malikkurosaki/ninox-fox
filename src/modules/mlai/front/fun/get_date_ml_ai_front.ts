'use server'
import prisma from "@/modules/_global/bin/prisma"
import { funGetUserDefaultFront } from "@/modules/user"
import _ from "lodash"
import moment from "moment"

export default async function funGetDateMlAiFront({ candidate, date }: { candidate: any, date: any }) {
   const def = await funGetUserDefaultFront()
   const can = await prisma.candidate.findFirst({
      where: {
         isActive: true,
         idProvinsi: Number(def.idProvinsi),
         idKabkot: def.idKabkot,
         tingkat: def.tingkat
      },
      select: {
         id: true,
      },
      orderBy: {
         name: 'asc'
      }
   })

   let candidateReal = null

   if (_.isNull(candidate) || _.isUndefined(candidate)) {
      candidateReal = can?.id
   } else {
      candidateReal = candidate
   }

   if (candidateReal == null) {
      return null
   } else {
      const awalDate = moment(date).format('YYYY-MM') + '-01'
      const akhirDate = moment(new Date(new Date(awalDate).setMonth(date.getMonth() + 1))).format('YYYY-MM-DD')

      const data = await prisma.mlAi.findMany({
         where: {
            isActive: true,
            idCandidate: candidateReal,
            dateContent: {
               gte: new Date(awalDate),
               lte: new Date(akhirDate),
            }
         }
      })

      const dataGroup = _.map(_.groupBy(data, "dateContent"), (v: any) => ({
         dateContent: v[0].dateContent
      }))

      const result = dataGroup.map(a => moment(a.dateContent).format('YYYY-MM-DD'));

      return result

   }
}