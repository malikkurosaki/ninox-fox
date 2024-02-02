"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartRumahIbadah from '../components/echart_rumah_ibadah';
import _ from 'lodash';

export default function ViewKeagamaan({ prov }: { prov: any }) {
  const [isProvinsi, setProvinsi] = useState<any>(null)
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>([])
  const [dataKecamatan, setDataKecamatan] = useState<any>([])

  async function onProvinsi(id: any) {
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

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KEAGAMAAN' />
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
          <Button>SUBMIT</Button>
        </Group>
      </Box>
      <Box pt={40}>
        <Box>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH RUMAH IBADAH KOTA DENPASAR
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
              <EchartRumahIbadah />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

