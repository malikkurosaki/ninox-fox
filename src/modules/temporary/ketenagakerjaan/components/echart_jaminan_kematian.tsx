"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

export default function EchartJaminanKematian() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      title: {
        text: "KEPEMILIKAN JAMINAN KEMATIAN",
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
          ['data', 'Tidak', 'Ya', 'Tidak Tahu'],
          ['Denpasar', 33, 21, 13],
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
        {
          type: 'bar', itemStyle: {
            color: "yellow"
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
