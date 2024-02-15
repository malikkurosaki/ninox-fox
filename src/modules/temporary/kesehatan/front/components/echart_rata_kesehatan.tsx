"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartRataKesehatan({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        jarak_terdekat_menuju_tempat_praktek_bidan: Number(data[0].bidan),
        jarak_terdekat_menuju_puskesmas_tanpa_rawat_inap: Number(data[0].puskesmasTanpaRawatInap),
        jarak_terdekat_menuju_puskesmas_dengan_rawat_inap: Number(data[0].puskesmasDgRawatInap),
        jarak_terdekat_menuju_rumah_sakit: Number(data[0].rumahSakit)
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: (a: any) => {
          return `
          <p>${a[0].data.name} : <strong> ${a[0].data.value} KM</strong></p>
          `;
        },
      },
      // dataset: {
      //   source: [
      //     ['data', 'Jarak tedekat menuju Tempat praktek bidan', 'Jarak terdekat menuju Puskesmas tanpa rawat inap', 'Jarak terdekat menuju Puskesmas dengan rawat inap', 'Jarak terdekat menuju Rumah sakit'],
      //     ['Denpasar', 0, 0, 0, 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Jarak tedekat menuju \n Tempat praktek bidan', 'Jarak terdekat menuju \n Puskesmas tanpa rawat inap', 'Jarak terdekat menuju \n Puskesmas dengan rawat inap', 'Jarak terdekat \n menuju Rumah sakit'],
          axisLabel: {
            color: "white",
            // fontSize: 10
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
            formatter: `{value} km`,
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
