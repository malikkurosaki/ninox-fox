"use server"
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

export default async function funAddMlAi({ body, content }: { body: any, content: any }) {

  let y = new Date('1970-01-01 ' + body.timeContent)
  let isoDateTime = new Date(y.getTime() - (y.getTimezoneOffset() * 60000)).toISOString()

  console.log(body.dateContent)

  const data = await prisma.mlAi.create({
    data: {
      idCandidate: body.idCandidate,
      dateContent: new Date(body.dateContent),
      timeContent: isoDateTime,
      content: content
    },
    select: {
      id: true,
      Candidate: {
        select: {
          name: true,
          AreaKabkot: {
            select: {
              name: true
            }
          },
          AreaProvinsi: {
            select: {
              name: true
            }
          }
        }
      }
    }
  })

  revalidatePath("dashboard/ml-ai?prov" + data.Candidate.AreaProvinsi + "&city" + data.Candidate.AreaKabkot)

  return {
    success: true,
    data: data.id,
    message: "Success"
  }
}