import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKemiskinanDanKetimpangan, funGetFrontBpjs, funGetFrontDataKemiskinan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataKemiskinan = await funGetFrontDataKemiskinan({ prov: 1, kab: null, kec: null })
  const dataBpjs = await funGetFrontBpjs({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewKemiskinanDanKetimpangan prov={dataProv} kab={dataKab} data_kemiskinan={dataKemiskinan} data_bpjs={dataBpjs}/>
    </>
  );
}

