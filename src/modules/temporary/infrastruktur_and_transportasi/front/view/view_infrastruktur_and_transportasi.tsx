"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartJenisPermukaan from '../components/echart_jenis_permukaan';
import EchartJalanDarat from '../components/echart_jalan_darat';
import EchartDataKecelakaan from '../components/echart_data_kecelakaan';
import _ from 'lodash';
import funGetFrontPermukaanJalan from '../fun/get_permukaan_jalan';
import funGetFrontJalanDilaluiKendaraan from '../fun/get_jalan_dilalui_kendaraan';
import funGetFrontKecelakaan from '../fun/get_kecelakaan';

export default function ViewInfrastrukturAndTransportasi({ prov, kab, val_def, permukaan_jalan, jalan_dilalui_kendaraan, kecelakaan }: { prov: any, kab: any, val_def: any, permukaan_jalan: any, jalan_dilalui_kendaraan: any, kecelakaan: any }) {
  const [isProvinsi, setProvinsi] = useState<any>(_.toString(val_def.idProvinsi))
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataPermukaanJalan, setDataPermukaanJalan] = useState(permukaan_jalan)
  const [dataJalanDilaluiKendaraan, setDataJalanDilaluiKendaraan] = useState(jalan_dilalui_kendaraan)
  const [dataKecelakaan, setDataKecelakaan] = useState(kecelakaan)

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
    const dataLoad1 = await funGetFrontPermukaanJalan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPermukaanJalan(dataLoad1)

    const dataLoad2 = await funGetFrontJalanDilaluiKendaraan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJalanDilaluiKendaraan(dataLoad2)

    const dataLoad3 = await funGetFrontKecelakaan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataKecelakaan(dataLoad3)
  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='INFRASTRUKTUR & TRANSPORTASI' />
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
              INFRASTRUKTUR
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
              <EchartJenisPermukaan data={dataPermukaanJalan} />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartJalanDarat data={dataJalanDilaluiKendaraan} />
            </Box>
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <Box>
            <Box pb={10}>
              <Text c={"white"} fw={'bold'} fz={20}>
                DATA ANGKA KECELAKAAN LALU LINTAS
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
              <EchartDataKecelakaan data={dataKecelakaan} />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

