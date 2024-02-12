import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKetenagakerjaan, funGetFrontJaminanHariTua, funGetFrontJaminanKecelakaanKerja, funGetFrontJaminanKematian, funGetFrontJaminanKesehatan, funGetFrontJaminanPensiun, funGetFrontPengangguran } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 17 })
  const dataJaminanKesehatan = await funGetFrontJaminanKesehatan({ prov: 17, kab: null, kec: null })
  const dataJaminanKecelakaanKerja = await funGetFrontJaminanKecelakaanKerja({ prov: 17, kab: null, kec: null })
  const dataJaminanKematian = await funGetFrontJaminanKematian({ prov: 17, kab: null, kec: null })
  const dataJaminanHariTua = await funGetFrontJaminanHariTua({ prov: 17, kab: null, kec: null })
  const dataJaminanPensiun = await funGetFrontJaminanPensiun({ prov: 17, kab: null, kec: null })
  const dataPengangguran = await funGetFrontPengangguran({ prov: 17, kab: null, kec: null })

  return (
    <>
      <ViewKetenagakerjaan prov={dataProv} kab={dataKab} jaminan_kesehatan={dataJaminanKesehatan} jaminan_kecelakaan_kerja={dataJaminanKecelakaanKerja} jaminan_kematian={dataJaminanKematian} jaminan_hari_tua={dataJaminanHariTua} jaminan_pensiun={dataJaminanPensiun} pengangguran={dataPengangguran}/>
    </>
  );
}
