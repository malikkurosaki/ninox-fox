import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewPendidikan, funGetFrontGuruHonorer, funGetFrontGuruTersertifikasi, funGetFrontJalanKakiKurang4Jam, funGetFrontJarakFasilitas } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataJarakFasilitas = await funGetFrontJarakFasilitas({ prov: 1, kab: null, kec: null })
  const dataJalanKakiKurang4Jam = await funGetFrontJalanKakiKurang4Jam({ prov: 1, kab: null, kec: null })
  const dataGuruTersertifikasi = await funGetFrontGuruTersertifikasi({ prov: 1, kab: null, kec: null })
  const dataGuruHonorer = await funGetFrontGuruHonorer({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewPendidikan prov={dataProv} kab={dataKab} jarak_fasilitas={dataJarakFasilitas} jalan_kaki={dataJalanKakiKurang4Jam} guru_tersertifikasi={dataGuruTersertifikasi} guru_honorer={dataGuruHonorer}/>
    </>
  );
}
