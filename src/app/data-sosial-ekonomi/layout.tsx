import { LayoutViewFront } from "@/modules/_global/front";
import { ViewLayoutTmp } from "@/modules/temporary";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const c = cookies().get("_cookiesNinox")
  if (!c || _.isUndefined(c) || !c.value || _.isEmpty(c.value)) return redirect('/')

  return (
    <>
      <ViewLayoutTmp>
        {children}
      </ViewLayoutTmp>
    </>
  );
}