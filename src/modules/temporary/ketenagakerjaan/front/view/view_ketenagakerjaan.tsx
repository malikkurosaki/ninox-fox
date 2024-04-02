"use client"
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle, WARNA } from '@/modules/_global';
import { Box, Button, Grid, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import EchartJaminanKesehatan from '../components/echart_jaminan_kesehatan';
import EchartJaminanKecelakaanKerja from '../components/echart_jaminan_kecelakaan_kerja';
import EchartJaminanKematian from '../components/echart_jaminan_kematian';
import EchartJaminanHariTua from '../components/echart_jaminan_hari_tua';
import EchartJaminanPensiun from '../components/echart_jaminan_pensiun';
import EchartDataPengangguran from '../components/echart_data_pengangguran';
import _ from 'lodash';
import funGetFrontJaminanKesehatan from '../fun/get_jaminan_kesehatan';
import funGetFrontJaminanKecelakaanKerja from '../fun/get_jaminan_kecelakaan_kerja';
import funGetFrontJaminanKematian from '../fun/get_jaminan_kematian';
import funGetFrontJaminanHariTua from '../fun/get_jaminan_hari_tua';
import funGetFrontJaminanPensiun from '../fun/get_jaminan_pensiun';
import funGetFrontPengangguran from '../fun/get_pengangguran';

export default function ViewKetenagakerjaan({ prov, kab, val_def, jaminan_kesehatan, jaminan_kecelakaan_kerja, jaminan_kematian, jaminan_hari_tua, jaminan_pensiun, pengangguran }: { prov: any, kab: any, val_def: any, jaminan_kesehatan: any, jaminan_kecelakaan_kerja: any, jaminan_kematian: any, jaminan_hari_tua: any, jaminan_pensiun: any, pengangguran: any }) {
  const [isProvinsi, setProvinsi] = useState<any>(_.toString(val_def.idProvinsi))
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataJaminanKesehatan, setDataJaminanKesehatan] = useState(jaminan_kesehatan)
  const [dataJaminanKecelakaanKerja, setDataJaminanKecelakaanKerja] = useState(jaminan_kecelakaan_kerja)
  const [dataJaminanKematian, setDataJaminanKematian] = useState(jaminan_kematian)
  const [dataJaminanHariTua, setDataJaminanHariTua] = useState(jaminan_hari_tua)
  const [dataJaminanPensiun, setDataJaminanPensiun] = useState(jaminan_pensiun)
  const [dataPengangguran, setDataPengangguran] = useState(pengangguran)

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
    const dataLoad1 = await funGetFrontJaminanKesehatan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanKesehatan(dataLoad1)

    const dataLoad2 = await funGetFrontJaminanKecelakaanKerja({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanKecelakaanKerja(dataLoad2)

    const dataLoad3 = await funGetFrontJaminanKematian({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanKematian(dataLoad3)

    const dataLoad4 = await funGetFrontJaminanHariTua({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanHariTua(dataLoad4)

    const dataLoad5 = await funGetFrontJaminanPensiun({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataJaminanPensiun(dataLoad5)

    const dataLoad6 = await funGetFrontPengangguran({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPengangguran(dataLoad6)
  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KETENAGAKERJAAN' />
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
          <Box
          >
            <Box pb={20}>
              <Text c={"white"} fw={'bold'} fz={20}>
                KEPEMILIKAN JAMINAN SOSIAL TENAGA KERJA
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
                <EchartJaminanKesehatan data={dataJaminanKesehatan} />
              </Box>
              <Box
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  borderRadius: 10,
                  padding: 20
                }}
              >
                <EchartJaminanKecelakaanKerja data={dataJaminanKecelakaanKerja} />
              </Box>
            </SimpleGrid>
            <Box pt={15}>
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
                  <EchartJaminanKematian data={dataJaminanKematian} />
                </Box>
                <Box
                  style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: 10,
                    padding: 20
                  }}
                >
                  <EchartJaminanHariTua data={dataJaminanHariTua} />
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
                  <EchartJaminanPensiun data={dataJaminanPensiun} />
                </Box>
              </SimpleGrid>
            </Box>

          </Box>
        </Box>
      </Box>
      <Box pt={40}>
        <Box>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              DATA PENGANGGURAN
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
            <EchartDataPengangguran data={dataPengangguran} />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
