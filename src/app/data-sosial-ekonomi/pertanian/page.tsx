import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewPertanian, funGetFrontIrigasi, funGetFrontJenisPrasaranaTransportasi } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataJenisPrasarana = await funGetFrontJenisPrasaranaTransportasi({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataIrigasi = await funGetFrontIrigasi({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewPertanian prov={dataProv} kab={dataKab} val_def={daerahDef} jenis_prasarana={dataJenisPrasarana} irigasi={dataIrigasi} />
    </>
  );
}

