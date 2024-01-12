"use client"
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, Stack, Text } from '@mantine/core';
import EchartIntensitasPencurian from '../components/echart_intensitas_pencurian';
import EchartPencurianKekerasan from '../components/echart_pencurian_kekerasan';
import EchartKejahatanPenipuan from '../components/echart_kejahatan_penipuan';
import EchartKejahatahPenganiayaan from '../components/echart_kejahatah_penganiayaan';
import EchartKejahatanPerkosaan from '../components/echart_kejahatan_perkosaan';
import EchartPeredaranNarkoba from '../components/echart_peredaran_narkoba';

export default function ViewKamtibmas() {
  const [options, setOptions] = useState<EChartsOption>({});

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
          ['Denpasar', 121, 90],
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
      <Box pt={20}>
        <Group justify='flex-end'>
          <Select radius={"md"} placeholder='Provinsi' />
          <Select radius={"md"} placeholder='Kabupaten/Kota' />
          <Select radius={"md"} placeholder='Kecamatan' />
        </Group>
      </Box>
      <Box pt={40}>
        <Box pb={20}>
          <Text c={"white"} fw={'bold'} fz={20}>
            INTESITAS KEJAHATAN MENURUT KAB/KOTA
          </Text>
        </Box>
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
            <EChartsReact style={{ height: 400 }} option={options} />
          </Box>
        </Box>
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
              <EchartIntensitasPencurian />
            </Box>
          </Box>
        </Box>
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
              <EchartPencurianKekerasan/>
            </Box>
          </Box>
        </Box>
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
              <EchartKejahatanPenipuan/>
            </Box>
          </Box>
        </Box>
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
              <EchartKejahatahPenganiayaan/>
            </Box>
          </Box>
        </Box>
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
              <EchartKejahatanPerkosaan/>
            </Box>
          </Box>
        </Box>
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
              <EchartPeredaranNarkoba/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
