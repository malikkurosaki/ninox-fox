import { ViewLogin } from "@/modules/auth";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
    const c = cookies().get("_cookiesNinox")
    if (c && !_.isUndefined(c) && c.value != '') return redirect('/summary')

    return (
        <>
            <ViewLogin />
        </>
    )
}