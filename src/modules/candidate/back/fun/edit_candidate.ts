'use server'
import prisma from "@/modules/_global/bin/prisma"
import _ from "lodash"
import { revalidatePath } from "next/cache"
import fs from 'fs';

/**
 * Fungsi untuk edit candidate
 * @param {Candidate} body - berisi name, id
 * @returns success - true 
 */

export default async function funEditCandidate({ body, img }: { body: any, img: FormData }) {
    const edit = await prisma.candidate.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name,
            idProvinsi: body.idProvinsi,
            idKabkot: body.idKabkot

        },
        select: {
            idProvinsi: true,
            idKabkot: true,
            img: true,
        }
    })

    if (!_.isNull(img) && !_.isUndefined(img)) {
        fs.unlink(`./public/candidate/${edit.img}`, (err) => { })
        const f: any = img.get('file')
        const fName = f.name
        const fExt = f.name.split(".").pop()

        const filenya = Buffer.from(await f.arrayBuffer())
        fs.writeFileSync(`./public/candidate/${body.id}.${fExt}`, filenya)

        await prisma.candidate.update({
            where: {
                id: body.id
            },
            data: {
                img: `${body.id}.${fExt}`
            }
        })
    }

    revalidatePath('/dashboard/candidate?prov' + edit.idProvinsi + '&city=' + edit.idKabkot)

    return {
        success: true,
        message: "Success"
    }
}