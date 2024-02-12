"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartKelasIbuHamil from '../components/echart_kelas_ibu_hamil';
import EchartKelasIbuHamilKkMiskin from '../components/echart_kelas_ibu_hamil_kk_miskin';
import EchartAnakButaKkMiskin from '../components/echart_anak_buta_kk_miskin';
import EchartPosPelayanan from '../components/echart_pos_pelayanan';
import EchartAksesFasilitasKesehatan from '../components/echart_akses_fasilitas_kesehatan';
import EchartRataKesehatan from '../components/echart_rata_kesehatan';
import EchartJumlahDokter from '../components/echart_jumlah_dokter';
import _ from 'lodash';
import funGetFrontKelasIbuHamil from '../fun/get_kelas_ibu_hamil';
import funGetFrontIbuHamilDariKeluargaMiskin from '../fun/get_ibu_hamil_dari_keluarga_miskin';
import funGetFrontJaminanUntukBaduta from '../fun/get_jaminan_untuk_baduta';
import funGetFrontPosPelayanan from '../fun/get_pos_pelayanan';
import funGetFrontFasilitas from '../fun/get_fasilitas';
import funGetFrontRataRataJarakFasilitas from '../fun/get_rata_rata_jarak_fasilitas';
import funGetFrontJumlahDokter from '../fun/get_jumlah_dokter';

export default function ViewKesehatan({ prov, kab, kelas_ibu_hamil, ibu_hamil_miskin, jaminan_untuk_baduta, pos_pelayanan, fasilitas, rata_rata_jarak_fasilitas, jumlah_dokter }: { prov: any, kab: any, kelas_ibu_hamil: any, ibu_hamil_miskin: any, jaminan_untuk_baduta: any, pos_pelayanan: any, fasilitas: any, rata_rata_jarak_fasilitas: any, jumlah_dokter: any }) {
  const [isProvinsi, setProvinsi] = useState<any>("17")
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataKelasIbuHamil, setDataKelasIbuHamil] = useState(kelas_ibu_hamil)
  const [dataIbuHamilDrKeluargaMiskin, setDataIbuHamilDrKeluargaMiskin] = useState(ibu_hamil_miskin)
  const [dataJaminanUntukBaduta, setDataJaminanUntukBaduta] = useState(jaminan_untuk_baduta)
  const [dataPosPelayanan, setDataPosPelayanan] = useState(pos_pelayanan)
  const [dataFasilitas, setDataFasilitas] = useState(fasilitas)
  const [dataRataRataJarakFasilitas, setDataRataRataJarakFasilitas] = useState(rata_rata_jarak_fasilitas)
  const [dataJumlahDokter, setDataJumlahDokter] = useState(jumlah_dokter)

  async function onProvinsi(id: any) {
    if (id == null) { id = 1 }
    setProvinsi(id)
    setKabupaten(null)
    setKecamatan(null)
    const dataKabNew = await MasterKabGetByProvince({ idProvinsi: Number(id) })
    setDataKabupaten(dataKabNew)
    setDataKecamatan([])
  }

  async function onKabupaten(id: any) {
    setKabupaten(id)
    setKecamatan(null)
    const dataKecNew = await MasterKecGetByKab({ idKabkot: id })
    setDataKecamatan(dataKecNew)
  }

  async function onGenerate() {
    const dataLoad1 = await funGetFrontKelasIbuHamil({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataKelasIbuHamil(dataLoad1)

    const dataLoad2 = await funGetFrontIbuHamilDariKeluargaMiskin({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataIbuHamilDrKeluargaMiskin(dataLoad2)

    const dataLoad3 = await funGetFrontJaminanUntukBaduta({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanUntukBaduta(dataLoad3)

    const dataLoad4 = await funGetFrontPosPelayanan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPosPelayanan(dataLoad4)

    const dataLoad5 = await funGetFrontFasilitas({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataFasilitas(dataLoad5)

    const dataLoad6 = await funGetFrontRataRataJarakFasilitas({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataRataRataJarakFasilitas(dataLoad6)

    const dataLoad7 = await funGetFrontJumlahDokter({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJumlahDokter(dataLoad7)

  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KESEHATAN' />
      </Stack>
      <Box
        style={{
          backgroundColor: "#05363D",
          position: "sticky",
          top: 0,
          zIndex: 99,
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Group justify='flex-end' pt={10} >
          <Select
            radius={"md"}
            placeholder='Provinsi'
            data={prov.map((pro: any) => ({
              value: String(pro.id),
              label: pro.name
            }))}
            onChange={(val) => { onProvinsi(val) }}
            value={isProvinsi}
          />
          <Select
            radius={"md"}
            placeholder='Kabupaten/Kota'
            data={dataKabupaten.map((kab: any) => ({
              value: String(kab.id),
              label: kab.name
            }))}
            onChange={(val) => { onKabupaten(val) }}
            value={isKabupaten}
          />
          <Select
            radius={"md"}
            placeholder='Kecamatan'
            data={dataKecamatan.map((kec: any) => ({
              value: String(kec.id),
              label: _.upperCase(kec.name)
            }))}
            onChange={(val) => { setKecamatan(val) }}
            value={isKecamatan}
          />
          <Button onClick={onGenerate}>SUBMIT</Button>
        </Group>
      </Box>
      <Box pt={30}>
        <Box pb={20}>
          <Text c={"white"} fw={'bold'} fz={20}>
            KETERSEDIAAN LAYANAN PECEGAHAN STUNTING
          </Text>
        </Box>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
        >
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartKelasIbuHamil data={dataKelasIbuHamil} />
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartKelasIbuHamilKkMiskin data={dataIbuHamilDrKeluargaMiskin} />
          </Box>
        </SimpleGrid>
        <Box pt={15}>
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 1 }}
          >
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartAnakButaKkMiskin data={dataJaminanUntukBaduta} />
            </Box>
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH POS PELAYANAN KESEHATAN
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartPosPelayanan data={dataPosPelayanan} />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH FASILITAS KESEHATAN
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartAksesFasilitasKesehatan data={dataFasilitas} />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              RATA-RATA JARAK KE FASILITAS KESEHATAN
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartRataKesehatan data={dataRataRataJarakFasilitas} />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH DOKTER
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartJumlahDokter data={dataJumlahDokter} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
