import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKamtibmas, funGetFrontNarkoba, funGetFrontPencurian, funGetFrontPencurianDanKekerasan, funGetFrontPenganiayaan, funGetFrontPenipuanDanPenggelapan, funGetFrontPerkelahian, funGetFrontPerkosaan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 17 })
  const dataPerkelahian = await funGetFrontPerkelahian({ prov: 17, kab: null, kec: null })
  const dataPencurian = await funGetFrontPencurian({ prov: 17, kab: null, kec: null })
  const dataPencurianDanKekerasan = await funGetFrontPencurianDanKekerasan({ prov: 17, kab: null, kec: null })
  const dataPenipuanDanPenggelapan = await funGetFrontPenipuanDanPenggelapan({ prov: 17, kab: null, kec: null })
  const dataPenganiayaan = await funGetFrontPenganiayaan({ prov: 17, kab: null, kec: null })
  const dataPerkosaan = await funGetFrontPerkosaan({ prov: 17, kab: null, kec: null })
  const dataNarkoba = await funGetFrontNarkoba({ prov: 17, kab: null, kec: null })

  return (
    <>
      <ViewKamtibmas prov={dataProv} kab={dataKab} perkelahian={dataPerkelahian} pencurian={dataPencurian} pencurian_dan_kekerasan={dataPencurianDanKekerasan} penipuan_dan_penggelapan={dataPenipuanDanPenggelapan} penganiayaan={dataPenganiayaan} perkosaan={dataPerkosaan} narkoba={dataNarkoba} />
    </>
  );
}
