import { ListConfUser, funGetAllConfUser } from "@/modules/user"

export default async function Page() {
    const data = await funGetAllConfUser()
    return (
        <>
            <ListConfUser data={data} />
        </>
    )
}