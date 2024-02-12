import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewEkonomi, funGetFrontJumlahPasar, funGetFrontLembagaKeuangan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 17 })
  const dataJumlahPasar = await funGetFrontJumlahPasar({ prov: 17, kab: null, kec: null })
  const dataLembagaKeuangan = await funGetFrontLembagaKeuangan({ prov: 17, kab: null, kec: null })

  return (
    <>
      <ViewEkonomi prov={dataProv} kab={dataKab} jumlah_pasar={dataJumlahPasar} lembaga_keuangan={dataLembagaKeuangan} />
    </>
  );
}

