import { MasterProvinceGetAll } from "@/modules/_global";
import { AddConfUser } from "@/modules/user/conf";

export default async function Page(){
    const pro = await MasterProvinceGetAll()
    return(
        <>
        <AddConfUser data={pro}/>
        </>
    )
}