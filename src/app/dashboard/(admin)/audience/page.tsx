import { MasterKabGetByProvince, MasterKecGetByKab, MasterProvinceGetAll } from "@/modules/_global";
import { ViewAudience, funGetAudienceByArea } from "@/modules/audience";
import { funDownloadAudience } from "@/modules/audience/back";
import _ from "lodash";
import React from "react";

async function Page({ searchParams }: { searchParams: { prov: any, city: any, kec: any } }) {
  const findData = {
    idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city)),
    idKec: (_.isNaN(Number(searchParams.kec)) ? 0 : Number(searchParams.kec)),
  }

  const prov = await MasterProvinceGetAll()
  const city = await MasterKabGetByProvince({ idProvinsi: findData.idProvinsi })
  const kec = await MasterKecGetByKab({ idKabkot: findData.idKabkot })
  const dataDB = await funGetAudienceByArea({ find: findData })
  const dataDownload = await funDownloadAudience({ find: findData })
  return <ViewAudience param={findData} provinsi={prov} kabupaten={city} kecamatan={kec} datatable={dataDB} datadownload={dataDownload} />;
}

export default Page;
