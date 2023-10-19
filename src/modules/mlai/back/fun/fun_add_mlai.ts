"use server"

import prisma from "@/modules/_global/bin/prisma";
import { MlAi } from "@prisma/client";
import { revalidatePath } from "next/cache";


export default async function funAddMlAi({ body }: { body: MlAi }) {
  await prisma.mlAi.create({
    data: {
      idCandidate: Number(body.idCandidate),
      content: body.content
    }
  })

  return {
    success: true,
    message: "Success"
  }
}