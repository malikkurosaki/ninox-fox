"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

export default function ChartTanpaBangunanTerdekat() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      legend: {
        bottom: "0%",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['data', 'Jumlah Pasar dengan bangunan permanen', 'Jumlah Pasar dengan bangunan semi permanen', 'Jumlah Pasar tanpa bangunan'],
          // ['Denpasar', 233, 23, 15],
          ['Denpasar', 67, 12, 0],
          // ['Badung', 31, 11, 9],
          // ['Giayar', 10, 1, 16],
          // ['Buleleng', 233, 8, 2],
          // ['Klungkung', 300, 1, 0],
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
            color: "orange"
          }
        },
        {
          type: 'bar'
        },
        {
          type: 'bar'
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

