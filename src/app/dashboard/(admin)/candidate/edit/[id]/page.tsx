import { MasterKabGetByProvince, MasterProvinceGetAll } from "@/modules/_global";
import { EditCandidate, funGetOneCandidate } from "@/modules/candidate";
import _ from "lodash";

export default async function Page({ params }: { params: { id: string,  prov: any, city: any  } }) {
    const data = await funGetOneCandidate({ id: params.id });

    const findData = {
        idProvinsi: (_.isNaN(Number(params.prov)) ? 0 : Number(params.prov)),
        idKabkot: (_.isNaN(Number(params.city)) ? 0 : Number(params.city)),
        tingkat: (_.isNaN(Number(params.city)) ? 1 : 2)
      }

      const prov = await MasterProvinceGetAll()
      const kab = await MasterKabGetByProvince({ idProvinsi: findData.idProvinsi })
    return (
        <>
            <EditCandidate data={data} params={findData} provinsi={prov} kabupaten={kab} />
        </>
    )
}