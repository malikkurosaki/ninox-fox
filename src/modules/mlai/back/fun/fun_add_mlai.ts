"use server"
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

export default async function funAddMlAi({ candidate, content }: { candidate: string, content: any }) {
  const data = await prisma.mlAi.create({
    data: {
      idCandidate: candidate,
      content: content
    },
    select: {
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
    message: "Success"
  }
}