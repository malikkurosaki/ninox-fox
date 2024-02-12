'use client'
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import ChartBangunanSemiPermanen from '../components/chart_bangunan_semi_permanen';
import ChartTanpaBangunanTerdekat from '../components/chart_tanpa_bangunan_terdekat';
import ChartLembagaKeuangan from '../components/chart_lembaga_keuangan';
import { ChartBangunanPermanen, funGetFrontJumlahPasar, funGetFrontLembagaKeuangan } from '../../..';
import EchartPublicConcerns from '@/modules/regional_insights/components/echart_public_concerns';
import _ from 'lodash';

export default function ViewEkonomi({ prov, kab, jumlah_pasar, lembaga_keuangan }: { prov: any, kab: any, jumlah_pasar: any, lembaga_keuangan: any }) {
  const [isProvinsi, setProvinsi] = useState<any>("1")
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataJumlahPasar, setDataJumlahPasar] = useState(jumlah_pasar)
  const [dataLembagaKeuangan, setDataLembagaKeuangan] = useState(lembaga_keuangan)

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
    const dataLoad1 = await funGetFrontJumlahPasar({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJumlahPasar(dataLoad1)

    const dataLoad2 = await funGetFrontLembagaKeuangan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataLembagaKeuangan(dataLoad2)

  }

  if (typeof window !== 'undefined')
    return (
      <>
        <Stack>
          <PageSubTitle text1='DATA' text2='EKONOMI' />
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
          <Box
          >
            <Box pb={20}>
              <Text c={"white"} fw={'bold'} fz={20}>
                {/* KEMUDAHAN MENGAKSES PASAR BERDASARKAN JENIS BANGUNAN*/}
                JUMLAH PASAR BERDASARKAN JENIS BANGUNAN
              </Text>
            </Box>
            {/* <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
          >
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <ChartBangunanPermanen/>
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <ChartBangunanSemiPermanen/>
            </Box>
          </SimpleGrid> */}
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
                  <ChartTanpaBangunanTerdekat data={dataJumlahPasar} />
                </Box>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
        <Box pt={40}>
          <Box>
            <Box pb={10}>
              <Text c={"white"} fw={'bold'} fz={20}>
                KETERSEDIAAN LEMBAGA KEUANGAN
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
              <ChartLembagaKeuangan data={dataLembagaKeuangan}/>
            </Box>
          </SimpleGrid>
        </Box>
      </>
    );
}
