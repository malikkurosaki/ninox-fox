"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

export default function EchartAksesFasilitasKesehatan() {
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
          ['data', 'Rumah Sakit', 'Rumah Bersalin', 'Rumah Sakit Bersalin', 'Tempat Praktek Bidan', 'Apotek', 'Puskesmas dengan Rawat Inap', 'Puskesmas tanpa Rawat Inap'],
          ['Denpasar', 280, 231, 121, 90, 233, 23, 15],
          ['Badung', 12, 212, 88, 283, 31, 11, 9],
          ['Giayar', 32, 33, 1, 300, 10, 1,16],
          ['Buleleng', 23, 32, 32, 232, 233, 8,2],
          ['Klungkung', 44, 43, 2, 10, 300, 1, 0],
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

