"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartPenggunaanSungai({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        ya: Number(data[0].ya),
        tidak: Number(data[0].tidak)
      }
    )
    loadData(dataChart)
  }, [data, dataChart])

  async function loadData(dataLoad: any) {
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
      //     ['data', 'Tidak', 'Ya', 'Tidak terdefinisi'],
      //     ['Denpasar', 0, 0, 0,],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Ya', 'Tidak'],
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
            formatter: `{value} juta m³`,
            color: "white"
          },
        }
      ],
      series: [
        {
          // name: 'Nama Kota',
          type: 'bar',
          barWidth: '70%',
          data: Object.keys(dataLoad ?? []).map(
            (v: any, i: any) =>
            ({
              name: _.upperCase(v),
              value: dataLoad[v],
              itemStyle: {
                color: (v == "ya") ? 'green' : 'red'
              },
            })
          ),
        }
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
