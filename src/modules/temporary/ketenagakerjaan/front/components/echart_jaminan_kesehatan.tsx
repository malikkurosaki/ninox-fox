"use client"
import { Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function EchartJaminanKesehatan({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        ya: Number(data[0].ya),
        tidak: Number(data[0].tidak),
        tidakTahu: Number(data[0].tidakTahu),
      }
    )
    loadData(dataChart)
  }, [data, dataChart])

  async function loadData(dataLoad: any) {
    const option: EChartsOption = {
      title: {
        text: "KEPEMILIKAN JAMINAN KESEHATAN",
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
      //     ['data', 'Tidak', 'Ya'],
      //     // ['Denpasar', 43, 22],
      //     ['Denpasar', 0, 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Ya', 'Tidak', 'Tidak Tahu'],
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
            (v: any) =>
            ({
              name: _.upperCase(v),
              value: dataLoad[v],
              itemStyle: {
                color: (v == 'ya') ? "green" : (v == 'tidak') ? 'red' : 'yellow'
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
