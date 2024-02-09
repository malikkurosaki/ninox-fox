import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ViewKesehatan, funGetFrontFasilitas, funGetFrontIbuHamilDariKeluargaMiskin, funGetFrontJaminanUntukBaduta, funGetFrontJumlahDokter, funGetFrontKelasIbuHamil, funGetFrontPosPelayanan, funGetFrontRataRataJarakFasilitas } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()
  const dataKab = await MasterKabGetByProvince({ idProvinsi: 1 })
  const dataKelasIbuHamil = await funGetFrontKelasIbuHamil({ prov: 1, kab: null, kec: null })
  const dataIbuHamilDrKeluargaMiskin = await funGetFrontIbuHamilDariKeluargaMiskin({ prov: 1, kab: null, kec: null })
  const dataJaminanUntukBaduta = await funGetFrontJaminanUntukBaduta({ prov: 1, kab: null, kec: null })
  const dataPosPelayanan = await funGetFrontPosPelayanan({ prov: 1, kab: null, kec: null })
  const dataFasilitas = await funGetFrontFasilitas({ prov: 1, kab: null, kec: null })
  const dataRataRataJarakFasilitas = await funGetFrontRataRataJarakFasilitas({ prov: 1, kab: null, kec: null })
  const dataJumlahDokter = await funGetFrontJumlahDokter({ prov: 1, kab: null, kec: null })

  return (
    <>
      <ViewKesehatan prov={dataProv} kab={dataKab} kelas_ibu_hamil={dataKelasIbuHamil} ibu_hamil_miskin={dataIbuHamilDrKeluargaMiskin} jaminan_untuk_baduta={dataJaminanUntukBaduta} pos_pelayanan={dataPosPelayanan} fasilitas={dataFasilitas} rata_rata_jarak_fasilitas={dataRataRataJarakFasilitas} jumlah_dokter={dataJumlahDokter}/>
    </>
  );
}