"use client"
import React, { useState } from 'react';
import { MasterKabGetByProvince, MasterKecGetByKab, PageSubTitle } from '@/modules/_global';
import { Box, Button, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import EchartIntensitasPencurian from '../components/echart_intensitas_pencurian';
import EchartPencurianKekerasan from '../components/echart_pencurian_kekerasan';
import EchartKejahatanPenipuan from '../components/echart_kejahatan_penipuan';
import EchartKejahatahPenganiayaan from '../components/echart_kejahatah_penganiayaan';
import EchartKejahatanPerkosaan from '../components/echart_kejahatan_perkosaan';
import EchartPeredaranNarkoba from '../components/echart_peredaran_narkoba';
import _ from 'lodash';
import EchartPerkelahianMassal from '../components/echart_perkelahian_massal';
import funGetFrontPerkelahian from '../fun/get_perkelahian';
import funGetFrontPencurian from '../fun/get_pencurian';
import funGetFrontPencurianDanKekerasan from '../fun/get_pencurian_dan_kekerasan';
import funGetFrontPenipuanDanPenggelapan from '../fun/get_penipuan_dan_penggelapan';
import funGetFrontPenganiayaan from '../fun/get_penganiayaan';
import funGetFrontPerkosaan from '../fun/get_perkosaan';
import funGetFrontNarkoba from '../fun/get_narkoba';

export default function ViewKamtibmas({ prov, kab, val_def, perkelahian, pencurian, pencurian_dan_kekerasan, penipuan_dan_penggelapan, penganiayaan, perkosaan, narkoba }: { prov: any, kab: any, val_def: any, perkelahian: any, pencurian: any, pencurian_dan_kekerasan: any, penipuan_dan_penggelapan: any, penganiayaan: any, perkosaan: any, narkoba: any }) {
  const [isProvinsi, setProvinsi] = useState<any>(_.toString(val_def.idProvinsi))
  const [isKabupaten, setKabupaten] = useState<any>(null)
  const [isKecamatan, setKecamatan] = useState<any>(null)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kab)
  const [dataKecamatan, setDataKecamatan] = useState<any>([])
  const [dataPerkelahian, setDataPerkelahian] = useState(perkelahian)
  const [dataPencurian, setDataPencurian] = useState(pencurian)
  const [dataPencurianDanKekerasan, setDataPencurianDanKekerasan] = useState(pencurian_dan_kekerasan)
  const [dataPenipuanDanPenggelapan, setDataPenipuanDanPenggelapan] = useState(penipuan_dan_penggelapan)
  const [dataPenganiayaan, setDataPenganiayaan] = useState(penganiayaan)
  const [dataPerkosaan, setDataPerkosaan] = useState(perkosaan)
  const [dataNarkoba, setDataNarkoba] = useState(narkoba)

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
    const dataLoad1 = await funGetFrontPerkelahian({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPerkelahian(dataLoad1)

    const dataLoad2 = await funGetFrontPencurian({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPencurian(dataLoad2)

    const dataLoad3 = await funGetFrontPencurianDanKekerasan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPencurianDanKekerasan(dataLoad3)

    const dataLoad4 = await funGetFrontPenipuanDanPenggelapan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPenipuanDanPenggelapan(dataLoad4)

    const dataLoad5 = await funGetFrontPenganiayaan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPenganiayaan(dataLoad5)

    const dataLoad6 = await funGetFrontPerkosaan({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataPerkosaan(dataLoad6)

    const dataLoad7 = await funGetFrontNarkoba({ prov: isProvinsi, kab: isKabupaten, kec: isKecamatan })
    setDataNarkoba(dataLoad7)
  }

  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KAMTIBMAS' />
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
      <Box pt={40}>
        <Box pb={20}>
          <Text c={"white"} fw={'bold'} fz={20}>
            INTENSITAS KEJAHATAN
          </Text>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} mb={20}>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box pt={10}>
              <EchartPerkelahianMassal data={dataPerkelahian} />
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}>
            <Box pt={10}>
              <EchartIntensitasPencurian data={dataPencurian} />
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} mb={20}>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box pt={10} >
              <EchartPencurianKekerasan data={dataPencurianDanKekerasan} />
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box pt={10} >
              <EchartKejahatanPenipuan data={dataPenipuanDanPenggelapan} />
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 2 }} >
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box pt={10} >
              <EchartKejahatahPenganiayaan data={dataPenganiayaan} />
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box pt={10} >
              <EchartKejahatanPerkosaan data={dataPerkosaan} />
            </Box>
          </Box>
        </SimpleGrid>
        <Box pt={15}>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <Box
              pt={10}
            >
              <EchartPeredaranNarkoba data={dataNarkoba} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
