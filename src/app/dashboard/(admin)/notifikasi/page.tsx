import { ViewListNotification, funGetAllNotifikasiBack } from "@/modules/notifikasi";
import { funGetAllAdmin, funGetAllUser } from "@/modules/user";

export default async function Page() {
  const data = await funGetAllNotifikasiBack({ page: 1 })
  const dUser = await funGetAllAdmin()
  return (
    <ViewListNotification data={data.data} nPage={data.nPage} admin={dUser} />
  )
}
