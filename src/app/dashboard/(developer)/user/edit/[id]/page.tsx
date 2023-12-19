import { MasterProvinceGetAll } from "@/modules/_global"
import { EditConfUser, funGetAllUserRole, funGetOneConfUser } from "@/modules/user"

export default async function Page({ params }: { params: { id: number } }) {
    const data = await funGetOneConfUser({id: params.id})
    const pro = await MasterProvinceGetAll()
    const allRole = await funGetAllUserRole()
    return (
        <>
        <EditConfUser wilayah={pro} role={allRole} data={data}/>
        </>
    )
}