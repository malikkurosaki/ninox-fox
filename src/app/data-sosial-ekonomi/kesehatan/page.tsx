import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKesehatan, funGetFrontFasilitas, funGetFrontIbuHamilDariKeluargaMiskin, funGetFrontJaminanUntukBaduta, funGetFrontJumlahDokter, funGetFrontKelasIbuHamil, funGetFrontPosPelayanan, funGetFrontRataRataJarakFasilitas } from '@/modules/temporary';
import { funGetUserDefaultFront } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const daerahDef = await funGetUserDefaultFront()
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: daerahDef.idProvinsi })
  const dataKelasIbuHamil = await funGetFrontKelasIbuHamil({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataIbuHamilDrKeluargaMiskin = await funGetFrontIbuHamilDariKeluargaMiskin({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJaminanUntukBaduta = await funGetFrontJaminanUntukBaduta({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataPosPelayanan = await funGetFrontPosPelayanan({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataFasilitas = await funGetFrontFasilitas({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataRataRataJarakFasilitas = await funGetFrontRataRataJarakFasilitas({ prov: daerahDef.idProvinsi, kab: null, kec: null })
  const dataJumlahDokter = await funGetFrontJumlahDokter({ prov: daerahDef.idProvinsi, kab: null, kec: null })

  return (
    <>
      <ViewKesehatan prov={dataProv} kab={dataKab} val_def={daerahDef} kelas_ibu_hamil={dataKelasIbuHamil} ibu_hamil_miskin={dataIbuHamilDrKeluargaMiskin} jaminan_untuk_baduta={dataJaminanUntukBaduta} pos_pelayanan={dataPosPelayanan} fasilitas={dataFasilitas} rata_rata_jarak_fasilitas={dataRataRataJarakFasilitas} jumlah_dokter={dataJumlahDokter}/>
    </>
  );
}