import funGetAllUser from "@/modules/user/fun/get_all_user";
import { UserLogView } from "@/modules/user/log";

export default async function Page() {
    const dUser = await funGetAllUser()
    return (
        <>
        <UserLogView user={dUser} />
        </>
    )
}