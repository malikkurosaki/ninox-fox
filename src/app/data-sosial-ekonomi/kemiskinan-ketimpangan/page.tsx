import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKemiskinanDanKetimpangan, funGetFrontBpjs, funGetFrontDataKemiskinan } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataKemiskinan = await funGetFrontDataKemiskinan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataBpjs = await funGetFrontBpjs({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewKemiskinanDanKetimpangan prov={dataProv} kab={dataKab} val_def={daerahDef} data_kemiskinan={dataKemiskinan} data_bpjs={dataBpjs}/>
    </>
  );
}

