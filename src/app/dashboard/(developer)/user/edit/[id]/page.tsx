import { MasterProvinceGetAll } from "@/modules/_global"
import { EditConfUser, funGetOneConfUser } from "@/modules/user/conf"
import funGetAllUserRole from "@/modules/user/role/fun/get_all_role"

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