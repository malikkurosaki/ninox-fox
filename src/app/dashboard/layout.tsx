import { LayoutView, funGetAccessAdmin } from "@/modules/_global";
import { funGetUserByCookies } from "@/modules/auth";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default async function Layout({ children }: { children: React.ReactNode }) {
    const c = cookies().get("_cookiesNinox")
    if (!c || _.isUndefined(c) || !c.value || _.isEmpty(c.value)) return redirect('/')

    const menu = await funGetAccessAdmin()
    const user = await funGetUserByCookies()

    return (
        <>
            <LayoutView dataMenu={menu} dataUser={user}>
                {children}
            </LayoutView>
        </>
    );
}