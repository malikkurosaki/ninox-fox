import { MasterKabGetByProvince, MasterProvinceGetAll } from "@/modules/_global";
import { AddCandidate, funGetCandidateActiveByArea, funGetCandidateByArea } from "@/modules/candidate";
import _ from "lodash";

export default async function Page({ searchParams }: { searchParams: { prov: any, city: any } }) {
    const findData = {
        idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
        idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city)),
        tingkat: (_.isNaN(Number(searchParams.city)) ? 1 : 2)
      }
    
      const prov = await MasterProvinceGetAll()
      const kab = await MasterKabGetByProvince({ idProvinsi: findData.idProvinsi })
      const candidate = await funGetCandidateByArea({ find: findData });
    console.log(candidate)
    return (
        <>
            <AddCandidate params={findData} provinsi={prov} kabupaten={kab} candidate={candidate}/>
        </>
    )
}