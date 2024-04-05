import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewEkonomi, funGetFrontJumlahPasar, funGetFrontLembagaKeuangan } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataJumlahPasar = await funGetFrontJumlahPasar({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataLembagaKeuangan = await funGetFrontLembagaKeuangan({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewEkonomi prov={dataProv} kab={dataKab} val_def={daerahDef} jumlah_pasar={dataJumlahPasar} lembaga_keuangan={dataLembagaKeuangan} />
    </>
  );
}

