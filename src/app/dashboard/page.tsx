import { Home, MasterKabGetByProvince, candateTingkat, funGetAreaDefault, funGetAreaKabKotByProvinsi, funGetUserAreaProvinsi, kabupatenCount, kecamatanCount, kelurahanCount, provinsiCount } from "@/modules/_global";
import { funGetUserByCookies } from "@/modules/auth";
import _ from "lodash";

export default async function Page() {

  const pro = await provinsiCount()
  const kab = await kabupatenCount()
  const kec = await kecamatanCount()
  const kel = await kelurahanCount()
  const gabungAll = await candateTingkat()
  const dataUser = await funGetUserByCookies()
  const valueWilayah = await funGetAreaDefault()
  const dataAreaPro = await funGetUserAreaProvinsi({})

  return (
    <>
      <Home areaPro={dataAreaPro} pro={pro} valWilayah={valueWilayah} kab={kab} kec={kec} kel={kel} can1={gabungAll.can1} can2={gabungAll.can2} user={dataUser} />
    </>
  )
}
