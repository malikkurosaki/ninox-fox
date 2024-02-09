import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKeagamaan, funGetFrontRumahIbadah } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataRumahIbadah = await funGetFrontRumahIbadah({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewKeagamaan prov={dataProv} kab={dataKab} rumah_ibadah={dataRumahIbadah}/>
    </>
  );
}

