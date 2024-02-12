import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewInfrastrukturAndTransportasi, funGetFrontJalanDilaluiKendaraan, funGetFrontKecelakaan, funGetFrontPermukaanJalan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 17 })
  const dataPermukaanJalan = await funGetFrontPermukaanJalan({ prov: 17, kab: null, kec: null })
  const dataJalanDilaluiKendaraan = await funGetFrontJalanDilaluiKendaraan({ prov: 17, kab: null, kec: null })
  const dataKecelakaan = await funGetFrontKecelakaan({ prov: 17, kab: null, kec: null })

  return (
    <>
      <ViewInfrastrukturAndTransportasi prov={dataProv} kab={dataKab} permukaan_jalan={dataPermukaanJalan} jalan_dilalui_kendaraan={dataJalanDilaluiKendaraan} kecelakaan={dataKecelakaan}/>
    </>
  );
}

