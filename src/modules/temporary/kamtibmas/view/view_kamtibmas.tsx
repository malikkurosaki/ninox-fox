"use client"
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
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

export default function ViewKamtibmas({ prov }: { prov: any }) {
  const [options, setOptions] = useState<EChartsOption>({});
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

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      title: {
        text: "KEJADIAN PERKELAHIAN MASSAL",
        textStyle: {
          color: "white",
          fontSize: 13,
        }
      },
      legend: {
        bottom: "0%",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['data', 'Tidak', 'ya'],
          // ['Denpasar', 121, 90],
          ['Denpasar', 0, 0],
        ]
      },
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            color: "white",
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: true,
          max: "100",
          splitLine: {
            lineStyle: {
              color: "gray",
              opacity: 0.1
            }
          },
          axisLabel: {
            color: "white"
          },
        }
      ],
      series: [
        {
          type: 'bar', itemStyle: {
            color: "red"
          }
        },
        {
          type: 'bar', itemStyle: {
            color: "green"
          }
        },
      ]
    };
    setOptions(option)
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
          <Button>SUBMIT</Button>
        </Group>
      </Box>
      <Box pt={40}>
        <Box pb={20}>
          <Text c={"white"} fw={'bold'} fz={20}>
            INTENSITAS KEJAHATAN KOTA DENPASAR
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
              <EChartsReact style={{ height: 400 }} option={options} />
            </Box>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}>
            <Box pt={10}>
              <EchartIntensitasPencurian />
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
              <EchartPencurianKekerasan />
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
              <EchartKejahatanPenipuan />
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
              <EchartKejahatahPenganiayaan />
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
              <EchartKejahatanPerkosaan />
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
              <EchartPeredaranNarkoba />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
