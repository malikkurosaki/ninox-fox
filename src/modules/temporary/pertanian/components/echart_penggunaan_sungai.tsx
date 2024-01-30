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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (a: any) => {
          return `
          <p>${a[0].data.name} : <strong> ${a[0].data.value} juta m³</strong></p>
          `;
        },
      },
      // dataset: {
      //   source: [
      //     ['data', 'Tidak', 'Ya'],
      //     // ['Denpasar', 41, 100, 33,],
      //     ['Denpasar', 420, 340,],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            color: "white",
          },
          data: ['Tidak', 'Ya'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: true,
          // max: "100",
          splitLine: {
            lineStyle: {
              color: "gray",
              opacity: 0.1
            }
          },
          axisLabel: {
            color: "white",
            formatter: `{value} juta m³`,
          },
        }
      ],
      // series: [
      //   {
      //     type: 'bar', itemStyle: {
      //       color: "red"
      //     }
      //   },
      //   {
      //     type: 'bar', itemStyle: {
      //       color: "green"
      //     }
      //   },
      // ]
      series: [
        {
          // name: 'Denpasar',
          type: 'bar',
          stack: 'total',
          emphasis: {
            focus: 'series',
          },
          data: [
            {
              value: 340,
              name: 'Ya',
              itemStyle: {
                color: "green"
              }
            },
            {
              value: 420,
              name: 'Tidak',
              itemStyle: {
                color: "red"
              }
            },
          ],
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
