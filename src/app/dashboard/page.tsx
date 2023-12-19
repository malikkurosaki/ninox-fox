import { Home, candateTingkat, kabupatenCount, kecamatanCount, kelurahanCount, provinsiCount } from "@/modules/_global";
import _ from "lodash";

export default async function Page() {

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
