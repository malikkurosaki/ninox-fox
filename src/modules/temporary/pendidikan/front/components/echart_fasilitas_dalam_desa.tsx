"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartFasilitasDalamDesa({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        fasilitas_berada_dalam_desa: Number(data[0].value)
      }
    )
    loadData(dataChart)
  }, [data, dataChart])

  async function loadData(dataLoad: any) {
    const option: EChartsOption = {
      title: {
        text: "BERJALAN KAKI KURANG DARI 4 JAM UNTUK MENCAPAI SD TERDEKAT",
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
      // dataset: {
      //   source: [
      //     ['data', 'Fasilitas Berada Dalam Desa'],
      //     // ['Denpasar', 280],
      //     ['Denpasar', 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Fasilitas Berada Dalam Desa'],
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

