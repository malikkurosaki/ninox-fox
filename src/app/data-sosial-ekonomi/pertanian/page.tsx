import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewPertanian, funGetFrontIrigasi, funGetFrontJenisPrasaranaTransportasi } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 17 })
  const dataJenisPrasarana = await funGetFrontJenisPrasaranaTransportasi({ prov: 17, kab: null, kec: null })
  const dataIrigasi = await funGetFrontIrigasi({ prov: 17, kab: null, kec: null })

  return (
    <>
      <ViewPertanian prov={dataProv} kab={dataKab} jenis_prasarana={dataJenisPrasarana} irigasi={dataIrigasi}/>
    </>
  );
}

