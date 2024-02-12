"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartJenisPrasaranaTransportasi from '../components/echart_jenis_prasarana_transportasi';
import EchartJalanBermotorRoda4 from '../components/echart_jalan_bermotor_roda_4';
import EchartPenggunaanSungai from '../components/echart_penggunaan_sungai';
import _ from 'lodash';
import funGetFrontJenisPrasaranaTransportasi from '../fun/get_jenis_prasarana_transportasi';
import funGetFrontIrigasi from '../fun/get_irigasi';

export default function ViewPertanian({ prov, kab, jenis_prasarana, irigasi }: { prov: any, kab: any, jenis_prasarana: any, irigasi: any }) {
  const [isProvinsi, setProvinsi] = useState<any>("17")
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataJenisPrasarana, setDataJenisPrasarana] = useState(jenis_prasarana)
  const [dataIrigasi, setDataIrigasi] = useState(irigasi)

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
    const dataLoad1 = await funGetFrontJenisPrasaranaTransportasi({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJenisPrasarana(dataLoad1)

    const dataLoad2 = await funGetFrontIrigasi({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataIrigasi(dataLoad2)
  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='INFRASTRUKTUR PERTANIAN' />
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
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              INFRASTRUKTUR PERTANIAN
            </Text>
          </Box>
        </Box>
        <Box pt={10}>
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
              <EchartJenisPrasaranaTransportasi data={dataJenisPrasarana} />
            </Box>
          </SimpleGrid>
        </Box>
        {/* <Box pt={15}>
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
            <EchartJalanBermotorRoda4 />
          </Box>
        </SimpleGrid>
      </Box> */}
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
              <EchartPenggunaanSungai data={dataIrigasi}/>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

