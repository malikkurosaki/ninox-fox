import { MasterProvinceGetAll, MasterKabGetByProvince } from "@/modules/_global";
import { ViewAddNotification } from "@/modules/notifikasi";

export default async function Page() {
  const pro = await MasterProvinceGetAll()
  const kab = await MasterKabGetByProvince({ idProvinsi: 0 })
  return <>
    <ViewAddNotification provinsi={pro} kabupaten={kab} />
  </>;
}
