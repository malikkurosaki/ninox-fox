import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewPendidikan, funGetFrontGuruHonorer, funGetFrontGuruTersertifikasi, funGetFrontJalanKakiKurang4Jam, funGetFrontJarakFasilitas } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataJarakFasilitas = await funGetFrontJarakFasilitas({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJalanKakiKurang4Jam = await funGetFrontJalanKakiKurang4Jam({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataGuruTersertifikasi = await funGetFrontGuruTersertifikasi({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataGuruHonorer = await funGetFrontGuruHonorer({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewPendidikan prov={dataProv} kab={dataKab} val_def={daerahDef} jarak_fasilitas={dataJarakFasilitas} jalan_kaki={dataJalanKakiKurang4Jam} guru_tersertifikasi={dataGuruTersertifikasi} guru_honorer={dataGuruHonorer} />
    </>
  );
}
