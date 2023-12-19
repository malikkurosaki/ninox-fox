import { MasterProvinceGetAll } from "@/modules/_global";
import { AddConfUser, funGetAllUserRole } from "@/modules/user";

export default async function Page(){
    const pro = await MasterProvinceGetAll()
    const allRole = await funGetAllUserRole()
    return(
        <>
        <AddConfUser data={pro} role={allRole}/>
        </>
    )
}