'use server'
import prisma from "@/modules/_global/bin/prisma";
import { revalidatePath } from "next/cache";

export default async function funUploadLta({ body }: { body: any }) {
    for (let i of body) {
        await prisma.leaderTraitAssessmentFix.update({
            where: {
                id: Number(i.id)
            },
            data: {
                pekerjaKeras: Number(i.pekerjaKeras),
                cerdas: Number(i.cerdas),
                jujur: Number(i.jujur),
                merakyat: Number(i.merakyat),
                tegas: Number(i.tegas),
                berpengalamanMemimpin: Number(i.berpengalamanMemimpin),
                berprestasi: Number(i.berprestasi),
                latarBelakangMiliter: Number(i.latarBelakangMiliter),
                agamis: Number(i.agamis)
            }
        });
    }

    revalidatePath('dashboard/leader-trait-assessment')

    return {
        success: true,
        message: 'Sukses'
    }
}