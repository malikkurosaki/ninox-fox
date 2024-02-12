"use client"
import React, { useState } from 'react';
import { Box, Button, Grid, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import EchartJarakPendidikan from '../components/echart_jarak_pendidikan';
import EchartFasilitasDalamDesa from '../components/echart_fasilitas_dalam_desa';
import EchartKetersediaanTransportasiSmp from '../components/echart_ketersediaan_transportasi_smp';
import EchartKetersediaanTransportasiSma from '../components/echart_ketersediaan_transportasi_sma';
import EchartKetersediaanTransportasiSmk from '../components/echart_ketersediaan_transportasi_smk';
import TableDataGuruTersertifikasi from '../components/table_data_guru_tersertifikasi';
import TableDataGuruHonorer from '../components/table_data_guru_honorer';
import _ from 'lodash';
import funGetFrontJarakFasilitas from '../fun/get_jarak_fasilitas';
import funGetFrontJalanKakiKurang4Jam from '../fun/get_jalan_kaki_kurang_4_jam';
import funGetFrontGuruTersertifikasi from '../fun/get_guru_tersertifikasi';
import funGetFrontGuruHonorer from '../fun/get_guru_honorer';


export default function ViewPendidikan({ prov, kab, jarak_fasilitas, jalan_kaki, guru_tersertifikasi, guru_honorer }: { prov: any, kab: any, jarak_fasilitas: any, jalan_kaki: any, guru_tersertifikasi: any, guru_honorer: any }) {
  const [isProvinsi, setProvinsi] = useState<any>("17")
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataJarakFasilitas, setDataJarakFasilitas] = useState(jarak_fasilitas)
  const [dataJalanKaki, setDataJalanKaki] = useState(jalan_kaki)
  const [dataGuruTersertifikasi, setDataGuruTersertifikasi] = useState(guru_tersertifikasi)
  const [dataGuruHonorer, setDataGuruHonorer] = useState(guru_honorer)

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
    const dataLoad1 = await funGetFrontJarakFasilitas({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJarakFasilitas(dataLoad1)

    const dataLoad2 = await funGetFrontJalanKakiKurang4Jam({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJalanKaki(dataLoad2)

    const dataLoad3 = await funGetFrontGuruTersertifikasi({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataGuruTersertifikasi(dataLoad3)

    const dataLoad4 = await funGetFrontGuruHonorer({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataGuruHonorer(dataLoad4)
  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='PENDIDIKAN' />
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
        <Box>
          <Box pb={20}>
            <Text c={"white"} fw={'bold'} fz={20}>
              RATA-RATA JARAK KE FASILITAS PENDIDIKAN
            </Text>
          </Box>
        </Box>
        <SimpleGrid
          cols={{ base: 1, sm: 1, lg: 1 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartJarakPendidikan data={dataJarakFasilitas} />
          </Box>
        </SimpleGrid>
        <Box pt={40}>
          <Box>
            <Box pb={10}>
              <Text c={"white"} fw={'bold'} fz={20}>
                KETERSEDIAAN TRANSPORTASI MENJANGKAU FASILITAS PENDIDIKAN
              </Text>
            </Box>
          </Box>
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
              <EchartFasilitasDalamDesa data={dataJalanKaki} />
            </Box>
            {/* <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSmp />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSma />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSmk />
            </Box> */}
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <TableDataGuruTersertifikasi data={dataGuruTersertifikasi} />
        </Box>
        <Box pt={40}>
          <TableDataGuruHonorer data={dataGuruHonorer}/>
        </Box>
      </Box>
    </>
  );
}
