import { ViewLogin, pwd_key_config } from "@/modules/auth";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
    const c = cookies().get("_cookiesNinox")
    if (c && !_.isUndefined(c) && c.value != '' && !_.isEmpty(c.value)) {
        const dataCookies = await unsealData(c!.value, { password: pwd_key_config as string })
        if (!_.isEmpty(dataCookies)) return redirect('/summary')
    }

    return (
        <>
            <ViewLogin />
        </>
    )
}