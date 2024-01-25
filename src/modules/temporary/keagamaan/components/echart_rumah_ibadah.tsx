"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

export default function EchartRumahIbadah() {
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
          // ['data', 'Masjid', 'Mushalla', 'Gereja Katholik', 'Pura', 'Wihara', 'Klenteng'],
          ['data', 'Masjid', 'Gereja Khatolik', 'Gereja Protestan', 'Pura', 'Wihara', 'Klenteng'],
          // ['Denpasar', 280, 231, 121, 90, 233,  23],
          ['Denpasar', 29, 5, 183, 941, 18,  0],
          // ['Badung', 12, 212, 88, 283, 31 , 11],
          // ['Giayar', 32, 33, 1,300, 10 , 1],
          // ['Buleleng', 23, 32, 32, 232, 233, 8],
          // ['Klungkung', 44, 43, 2, 10, 300, 1],
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
        {
          type: 'bar'
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

