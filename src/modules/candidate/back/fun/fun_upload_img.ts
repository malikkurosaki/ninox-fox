
'use server'
import { Candidate } from '@prisma/client';

import fs from 'fs'
import prisma from '@/modules/_global/bin/prisma'

export async function funUploadImg(formData: FormData) {
    const f: any = formData.get('file')
    const fName = f.name
    const fExt = f.name.split(".").pop()

    const fl = await prisma.candidate.create({
        data: {
            name: fName,
            img: fName,
            idProvinsi: f
            // id: fName,
            // idProvinsi: fName,
            // idKabkot: fName
        },
        select: {
            id: true,
            name: true,
            img: true,
            idProvinsi: true,
            idKabkot: true
        }
    })

    const filenya = Buffer.from(await f.arrayBuffer())
    fs.writeFileSync(`./public/img/user/${fl.id}.${fExt}`, filenya)

    return {
        success: true,
        message: "success",
        data: fl
    }

}