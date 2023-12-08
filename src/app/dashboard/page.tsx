import { candateTingkat } from "@/modules/_global/fun/fun_candidate_tingkat";
import { kabupatenCount } from "@/modules/_global/fun/fun_kabupaten_count";
import { kecamatanCount } from "@/modules/_global/fun/fun_kecamatan_count";
import { kelurahanCount } from "@/modules/_global/fun/fun_kelurahan_count";
import { provinsiCount } from "@/modules/_global/fun/fun_provinsi_count";
import Home from "@/modules/_global/home/home";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const c = cookies().get("_cookiesNinox")
  if (!c || _.isUndefined(c) || !c.value || _.isEmpty(c.value)) return redirect('/')

  const pro = await provinsiCount()
  const kab = await kabupatenCount()
  const kec = await kecamatanCount()
  const kel = await kelurahanCount()
  const gabungAll = await candateTingkat();


  return (
    <>
      <Home pro={pro} kab={kab} kec={kec} kel={kel} can1={gabungAll.can1} can2={gabungAll.can2} />
    </>
  )
}
