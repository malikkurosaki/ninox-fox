import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewPertanian, funGetFrontIrigasi, funGetFrontJenisPrasaranaTransportasi } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataJenisPrasarana = await funGetFrontJenisPrasaranaTransportasi({ prov: 1, kab: null, kec: null })
  const dataIrigasi = await funGetFrontIrigasi({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewPertanian prov={dataProv} kab={dataKab} jenis_prasarana={dataJenisPrasarana} irigasi={dataIrigasi}/>
    </>
  );
}

