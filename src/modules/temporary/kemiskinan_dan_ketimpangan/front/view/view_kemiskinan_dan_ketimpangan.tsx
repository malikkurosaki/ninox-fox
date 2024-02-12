"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartPresentaseKemiskinan from '../components/echart_presentase_kemiskinan';
import EchartPesertaBpjs from '../components/echart_peserta_bpjs';
import _ from 'lodash';
import funGetFrontDataKemiskinan from '../fun/get_data_kemiskinan';
import funGetFrontBpjs from '../fun/get_bpjs';

export default function ViewKemiskinanDanKetimpangan({ prov, kab, data_kemiskinan, data_bpjs }: { prov: any, kab: any, data_kemiskinan: any, data_bpjs: any }) {
  const [isProvinsi, setProvinsi] = useState<any>("17")
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataKemiskinan, setDataKemiskinan] = useState(data_kemiskinan)
  const [dataBpjs, setDataBpjs] = useState(data_bpjs)

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
    const dataLoad1 = await funGetFrontDataKemiskinan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataKemiskinan(dataLoad1)

    const dataLoad2 = await funGetFrontBpjs({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataBpjs(dataLoad2)

  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KEMISKINAN DAN KETIMPANGAN' />
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
            <EchartPresentaseKemiskinan data={dataKemiskinan} />
          </Box>
        </SimpleGrid>
      </Box>
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
            <EchartPesertaBpjs data={dataBpjs} />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

