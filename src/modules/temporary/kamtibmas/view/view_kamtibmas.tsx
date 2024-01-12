"use client"
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, Stack, Text } from '@mantine/core';

export default function ViewKamtibmas() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      title: {
        text: "INTESITAS KEJAHATAN MENURUT KAB/KOTA",
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
            KEPEMILIKAN JAMINAN SOSIAL TENAGA KERJA KAB/KOTA
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
      </Box>
    </>
  );
}
