'use server'

import prisma from "@/modules/_global/bin/prisma";
import { Candidate } from "@prisma/client";

export default async function funAddCandidate({ body }: { body: Candidate }) {
    console.log(body);

    const data = await prisma.candidate.create({
        data: body,
    })

    return {
        success: true,
        message: "Success"
    }

}