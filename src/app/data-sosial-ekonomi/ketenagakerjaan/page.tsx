import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKetenagakerjaan, funGetFrontJaminanHariTua, funGetFrontJaminanKecelakaanKerja, funGetFrontJaminanKematian, funGetFrontJaminanKesehatan, funGetFrontJaminanPensiun, funGetFrontPengangguran } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataJaminanKesehatan = await funGetFrontJaminanKesehatan({ prov: 1, kab: null, kec: null })
  const dataJaminanKecelakaanKerja = await funGetFrontJaminanKecelakaanKerja({ prov: 1, kab: null, kec: null })
  const dataJaminanKematian = await funGetFrontJaminanKematian({ prov: 1, kab: null, kec: null })
  const dataJaminanHariTua = await funGetFrontJaminanHariTua({ prov: 1, kab: null, kec: null })
  const dataJaminanPensiun = await funGetFrontJaminanPensiun({ prov: 1, kab: null, kec: null })
  const dataPengangguran = await funGetFrontPengangguran({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewKetenagakerjaan prov={dataProv} kab={dataKab} jaminan_kesehatan={dataJaminanKesehatan} jaminan_kecelakaan_kerja={dataJaminanKecelakaanKerja} jaminan_kematian={dataJaminanKematian} jaminan_hari_tua={dataJaminanHariTua} jaminan_pensiun={dataJaminanPensiun} pengangguran={dataPengangguran}/>
    </>
  );
}
