"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

export default function EchartPenggunaanSungai() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      title: {
        text: "PENGGUNAAN SUNGAI UNTUK PENGAIRAN IRIGASI LAHAN PERTANIAN",
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
          ['data', 'Tidak', 'Ya', 'Tidak terdefinisi'],
          // ['Denpasar', 41, 100, 33,],
          ['Denpasar', 0, 0, 0,],
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
        {
          type: 'bar', itemStyle: {
            color: "orange"
          }
        },
      ]
    };
    setOptions(option)
  }

  return (
    <>
      <Box
        pt={10}
      >
        <EChartsReact style={{ height: 400 }} option={options} />
      </Box>
    </>
  );
}
