import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKeagamaan, funGetFrontRumahIbadah } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataRumahIbadah = await funGetFrontRumahIbadah({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewKeagamaan prov={dataProv} kab={dataKab} val_def={daerahDef} rumah_ibadah={dataRumahIbadah}/>
    </>
  );
}

