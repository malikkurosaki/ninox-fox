import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'

export async function GET(req: NextRequest, { params }: { params: { name: any } }) {
    const real = `./public/${params.name[0]}/${params.name[1]}`

    let fl;

    if (fs.existsSync(real)) {
        fl = fs.readFileSync(`./public/${params.name[0]}/${params.name[1]}`)
    } else {
        if(params.name[0]=="candidate"){
            fl = fs.readFileSync(`./public/profile.png`)
        }else{
            fl = fs.readFileSync(`./public/ninox.png`)
        }
    }

    return new NextResponse(fl, {
        headers: {
            "Content-Type": "image/png"
        }
    })

}