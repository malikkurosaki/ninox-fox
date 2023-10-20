import { NextApiRequest } from "next";
import fs from 'fs'
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest,{ params}: {params : {name: any}}) {
    const real = `./public/img/${params.name[0]}/${params.name[1]}`
    let fl

    if (fs.existsSync(real)) {
        fl = fs.readFileSync(`./public/img/${params.name[1]}/${params.name[0]}`)
    } else {
        fl = fs.readFileSync(`./public/img/image.jpeg`)
    }

    return new NextResponse(fl, {
        headers: {
            "Content-Type": "image/png"
        }
    })
}