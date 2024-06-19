"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartRumahIbadah({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        masjid: Number(data[0].masjid),
        gerejaKhatolik: Number(data[0].gerejaKhatolik),
        gerejaProtestan: Number(data[0].gerejaProtestan),
        pura: Number(data[0].pura),
        wihara: Number(data[0].wihara),
        kelenteng: Number(data[0].kelenteng),
      }
    )
    loadData(dataChart)
  }, [data, dataChart])

  async function loadData(dataLoad: any) {
    const option: EChartsOption = {
      legend: {
        bottom: "0%",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {},
      // dataset: {
      //   source: [
      //     ['data', 'Masjid', 'Gereja Khatolik', 'Gereja Protestan', 'Pura', 'Wihara', 'Klenteng'],
      //     ['Denpasar', 29, 5, 183, 941, 18, 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Masjid', 'Gereja Khatolik', 'Gereja Protestan', 'Pura', 'Wihara', 'Kelenteng'],
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
          // name: 'Nama Kota',
          type: 'bar',
          barWidth: '70%',
          data: Object.keys(dataLoad ?? []).map(
            (v: any, i: any) =>
            ({
              name: _.upperCase(v),
              value: dataLoad[v],
              itemStyle: {
                color: COLOR_SOSIAL_EKONOMI[i]
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

