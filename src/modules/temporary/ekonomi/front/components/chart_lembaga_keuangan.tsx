"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function ChartLembagaKeuangan({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        jumlah_bank_umum_pemerintah: Number(data[0].bankUmumPemerintah),
        jumlah_bank_umum_swasta: Number(data[0].bankUmumSwasta),
        jumlah_bank_pengkreditan_rakyat: Number(data[0].bankPengkreditanRakyat),
        jumlah_koperasi_simpan_pinjam: Number(data[0].koperasiSimpanPinjam)
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
      //     ['data', 'Jumlah Bank Umum Pemerintah', 'Jumlah Bank Umum Swasta', 'Jumlah Bank Pengkreditan Rakyat', 'Jumlah koperasi Simpan Pinjam'],
      //     ['Denpasar', 106, 83, 34, 307],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Jumlah Bank Umum Pemerintah', 'Jumlah Bank Umum Swasta', 'Jumlah Bank Pengkreditan Rakyat', 'Jumlah koperasi Simpan Pinjam'],
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

