'use server'
import { funGetUserByCookies } from "@/modules/auth"
import prisma from "../../bin/prisma"
import { funGetOneCandidate } from "@/modules/candidate"
import { funGetOneProvinsi } from "../.."
import _ from "lodash"
import mtqq_client from "../../util/mqtt_client"

export default async function funAddNotifications({ kategori, candidateId, candidateId2, provinsiId }: { kategori: any, candidateId?: any, candidateId2?: any, provinsiId?: any }) {
   const kandidat = await funGetOneCandidate({ id: candidateId })
   const admin = await funGetUserByCookies()
   let desc = ''
   let judul = ''

   if (kategori == 'emotion') {
      desc = 'Data emosi kandidat ' + kandidat.name + ' telah diperbarui'
      judul = 'Update data emosi'
   } else if (kategori == 'step') {
      desc = 'Data STEP kandidat ' + kandidat.name + ' telah diperbarui'
      judul = 'Update data STEP'
   } else if (kategori == 'swot') {
      desc = 'Data SWOT kandidat ' + kandidat.name + ' telah diperbarui'
      judul = 'Update data SWOT'
   } else if (kategori == 'mlai') {
      desc = 'Data ML-AI kandidat ' + kandidat.name + ' telah diperbarui'
      judul = 'Update data ML-AI'
   } else if (kategori == 'pairing') {
      const kandidat2 = await funGetOneCandidate({ id: candidateId2 })
      desc = 'Data pasangan regional ' + kandidat.name + ' & ' + kandidat2.name + ' telah diperbarui'
      judul = 'Update data pasangan regional'
   } else if (kategori == 'pct') {
      const prov = await funGetOneProvinsi({ id: provinsiId })
      desc = 'Data trend perhatian publik provinsi ' + prov?.name + ' telah diperbarui'
      judul = 'Update data trend perhatian publik'
   } else if (kategori == 'lta') {
      const prov = await funGetOneProvinsi({ id: provinsiId })
      desc = 'Data penilaian sifat pemimpin provinsi ' + prov?.name + ' telah diperbarui'
      judul = 'Update data penilaian sifat pemimpin'
   } else if (kategori == 'rhi') {
      const prov = await funGetOneProvinsi({ id: provinsiId })
      desc = 'Data isu provinsi ' + prov?.name + ' telah diperbarui'
      judul = 'Update data isu wilayah'
   }

   if (provinsiId == null) {
      provinsiId = kandidat.idProvinsi
   }

   const userArea = await prisma.userArea.findMany({
      where: {
         idProvinsi: provinsiId,
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
      category: kategori,
      description: desc,
      title: judul
   }));

   await prisma.notifications.createMany({
      data: listUser
   })

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

   return { success: true }
}