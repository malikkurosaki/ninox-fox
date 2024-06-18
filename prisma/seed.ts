import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
; (async () => {
    console.log("apa akabar")
})().then(() => {
    console.log("done")
    process.exit(0)
})
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })