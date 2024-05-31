import prisma from "@/modules/_global/bin/prisma"
import { funGetUserByCookies } from "@/modules/auth"
import { funGetUserDefaultFront } from "@/modules/user"
import 'colors'

export async function GET(req: Request) {
    const take = +(new URL(req.url).searchParams.get('take') || "10")
    const skip = +(new URL(req.url).searchParams.get('skip') || "0")

    console.log(new URL(req.url).searchParams.get('skip'), "=====>".red)

    const user = await funGetUserByCookies()
    const can = await funGetUserDefaultFront()
    const userArea = await funGetUserDefaultFront()

    const data = await prisma.notifications.findMany({
        take,
        skip,
        where: {
            OR: [
                {
                    isActive: true,
                    idUserClient: user?.id,
                    idCandidate: can.idCandidate
                },
                {
                    isActive: true,
                    idUserClient: user?.id,
                    idProvinsi: userArea.idProvinsi,
                    idCandidate: null
                },
            ]
        },
        orderBy: [
            {
                isRead: 'asc'
            },
            {
                createdAt: 'desc'
            }
        ]
    })

    // console.log(data1)
    // const data = {
    //     trueRead: data1.filter((i: any) => i.isRead === true),
    //     falseRead: data1.filter((i: any) => i.isRead === false),
    // }

    // console.log('data BE' + data)
    return Response.json(data)
}