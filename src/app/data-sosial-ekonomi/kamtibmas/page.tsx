import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKamtibmas, funGetFrontNarkoba, funGetFrontPencurian, funGetFrontPencurianDanKekerasan, funGetFrontPenganiayaan, funGetFrontPenipuanDanPenggelapan, funGetFrontPerkelahian, funGetFrontPerkosaan } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataPerkelahian = await funGetFrontPerkelahian({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPencurian = await funGetFrontPencurian({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPencurianDanKekerasan = await funGetFrontPencurianDanKekerasan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPenipuanDanPenggelapan = await funGetFrontPenipuanDanPenggelapan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPenganiayaan = await funGetFrontPenganiayaan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPerkosaan = await funGetFrontPerkosaan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataNarkoba = await funGetFrontNarkoba({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewKamtibmas prov={dataProv} kab={dataKab} val_def={daerahDef} perkelahian={dataPerkelahian} pencurian={dataPencurian} pencurian_dan_kekerasan={dataPencurianDanKekerasan} penipuan_dan_penggelapan={dataPenipuanDanPenggelapan} penganiayaan={dataPenganiayaan} perkosaan={dataPerkosaan} narkoba={dataNarkoba} />
    </>
  );
}
