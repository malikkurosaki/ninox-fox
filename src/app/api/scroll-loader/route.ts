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

    await prisma.notifications.updateMany({
        where: {
            OR: [
                {
                    isActive: true,
                    isRead: false,
                    idUserClient: user?.id,
                    idCandidate: can.idCandidate
                },
                {
                    isActive: true,
                    isRead: false,
                    idUserClient: user?.id,
                    idProvinsi: userArea.idProvinsi,
                    idCandidate: null
                },
            ]
        },
        data: {
            isRead: false
        }
    })

    return Response.json(data)
}