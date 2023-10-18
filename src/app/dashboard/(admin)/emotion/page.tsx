import { MasterKabGetByProvince, MasterProvinceGetAll } from "@/modules/_global";
import { funGetCandidateActiveByArea } from "@/modules/candidate";
import { ViewBackEmotion } from "@/modules/emotion";
import { funGetEmotionByCandidateAreaDate } from "@/modules/emotion/back";
import _ from "lodash";

export default async function Page({ searchParams }: { searchParams: { prov: any, city: any, can: any, date: any } }) {
  const findData = {
    idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city)),
    tingkat: (_.isNaN(Number(searchParams.city)) ? 1 : 2),
    idCandidate: (_.isNaN(Number(searchParams.can)) ? 0 : Number(searchParams.can)),
    date: (_.isUndefined(searchParams.date) ? null : searchParams.date)
  }


  const prov = await MasterProvinceGetAll()
  const city = await MasterKabGetByProvince({ idProvinsi: findData.idProvinsi })
  const candidate = await funGetCandidateActiveByArea({ find: findData })
  const dataDB = await funGetEmotionByCandidateAreaDate({ find: findData })
  return <ViewBackEmotion param={findData} provinsi={prov} kabupaten={city} candidate={candidate} datatable={dataDB} />;
}