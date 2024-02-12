'use server'
import prisma from "@/modules/_global/bin/prisma";
import { Candidate } from "@prisma/client";
import _ from "lodash";
import { revalidatePath } from "next/cache";
import fs from 'fs';

/**
 * Fungsi untuk create candidate
 * @param {Candidate} body - berisi name, idprovinsi, idkabkot, tingkat
 * @returns success - true 
 */

export default async function funAddCandidate({ body, img }: { body: Candidate, img: FormData }) {

    const data = await prisma.candidate.create({
        data: body,
        select: {
            id: true
        }
    })


    if (!_.isNull(img) && !_.isUndefined(img)) {
        const f: any = img.get('file')
        const fName = f.name
        const fExt = f.name.split(".").pop()

        const filenya = Buffer.from(await f.arrayBuffer())
        fs.writeFileSync(`./public/candidate/${data.id}.${fExt}`, filenya)

        await prisma.candidate.update({
            where: {
                id: data.id
            },
            data: {
                img: `${data.id}.${fExt}`
            }
        })
    }

    revalidatePath('/dashboard/candidate?prov' + body.idProvinsi + '&city=' + body.idKabkot)

    return {
        success: true,
        data: data.id,
        message: "Success"
    }

}