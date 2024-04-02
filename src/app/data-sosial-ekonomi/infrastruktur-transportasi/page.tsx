import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewInfrastrukturAndTransportasi, funGetFrontJalanDilaluiKendaraan, funGetFrontKecelakaan, funGetFrontPermukaanJalan } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataPermukaanJalan = await funGetFrontPermukaanJalan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJalanDilaluiKendaraan = await funGetFrontJalanDilaluiKendaraan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataKecelakaan = await funGetFrontKecelakaan({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewInfrastrukturAndTransportasi prov={dataProv} kab={dataKab} val_def={daerahDef} permukaan_jalan={dataPermukaanJalan} jalan_dilalui_kendaraan={dataJalanDilaluiKendaraan} kecelakaan={dataKecelakaan}/>
    </>
  );
}

