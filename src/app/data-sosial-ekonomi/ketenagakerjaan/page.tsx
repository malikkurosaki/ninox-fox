import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKetenagakerjaan, funGetFrontJaminanHariTua, funGetFrontJaminanKecelakaanKerja, funGetFrontJaminanKematian, funGetFrontJaminanKesehatan, funGetFrontJaminanPensiun, funGetFrontPengangguran } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataJaminanKesehatan = await funGetFrontJaminanKesehatan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJaminanKecelakaanKerja = await funGetFrontJaminanKecelakaanKerja({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJaminanKematian = await funGetFrontJaminanKematian({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJaminanHariTua = await funGetFrontJaminanHariTua({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJaminanPensiun = await funGetFrontJaminanPensiun({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPengangguran = await funGetFrontPengangguran({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewKetenagakerjaan prov={dataProv} kab={dataKab} val_def={daerahDef} jaminan_kesehatan={dataJaminanKesehatan} jaminan_kecelakaan_kerja={dataJaminanKecelakaanKerja} jaminan_kematian={dataJaminanKematian} jaminan_hari_tua={dataJaminanHariTua} jaminan_pensiun={dataJaminanPensiun} pengangguran={dataPengangguran} />
    </>
  );
}
