import { MasterProvinceGetAll } from "@/modules/_global";
import { AddConfUser } from "@/modules/user/conf";
import funGetAllUserRole from "@/modules/user/role/fun/get_all_role";

export default async function Page(){
    const pro = await MasterProvinceGetAll()
    const allRole = await funGetAllUserRole()
    return(
        <>
        <AddConfUser data={pro} role={allRole}/>
        </>
    )
}