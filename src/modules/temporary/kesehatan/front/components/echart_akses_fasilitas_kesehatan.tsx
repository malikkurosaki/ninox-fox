"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartAksesFasilitasKesehatan({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        rumah_sakit: Number(data[0].rumahSakit),
        rumah_bersalin: Number(data[0].rumahBersalin),
        rumah_sakit_bersalin: Number(data[0].rumahSakitBersalin),
        tempat_praktek_bidan: Number(data[0].bidan),
        apotek: Number(data[0].apotek),
        puskesmas_dengan_rawat_inap: Number(data[0].puskesmasDgRawatInap),
        puskesmas_tanpa_rawat_inap: Number(data[0].puskesmasTnpRawatInap)
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
      //     ['data', 'Rumah Sakit', 'Rumah Bersalin', 'Rumah Sakit Bersalin', 'Tempat Praktek Bidan', 'Apotek', 'Puskesmas dengan Rawat Inap', 'Puskesmas tanpa Rawat Inap'],
      //     ['Denpasar', 15, 0, 1, 0, 42, 2, 4],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Rumah Sakit', 'Rumah Bersalin', 'Rumah Sakit Bersalin', 'Tempat Praktek Bidan', 'Apotek', 'Puskesmas dengan Rawat Inap', 'Puskesmas tanpa Rawat Inap'],
          axisLabel: {
            color: "white",
            rotate: 45,
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

