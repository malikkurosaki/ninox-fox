"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartJumlahDokter({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        dokter_pria_yang_tinggal_di_desa_kelurahan: Number(data[0].pria),
        dokter_wanita_yang_tinggal_di_desa_kelurahan: Number(data[0].wanita)
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
      //     ['data', 'Tenaga dokter pria yang tinggal menetap di desa kelurahan', 'Tenaga dokter wanita yang tinggal menetap di desa kelurahan'],
      //     ['Denpasar', 0, 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Dokter pria yang tinggal di desa kelurahan', 'Dokter wanita yang tinggal di desa kelurahan'],
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
