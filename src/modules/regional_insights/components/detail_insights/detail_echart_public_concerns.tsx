"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box } from '@mantine/core';
import _ from 'lodash';
import { COLOR_PCT } from '@/modules/_global';

export default function DetailEchartPublicConcerns({ dataPct }: { dataPct: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart({
      infrastruktur: Number(dataPct[0].infrastruktur),
      keadilan_sosial: Number(dataPct[0].keadilanSosial),
      kemiskinan: Number(dataPct[0].kemiskinan),
      lapangan_pekerjaan: Number(dataPct[0].lapanganPekerjaan),
      layanan_kesehatan: Number(dataPct[0].layananKesehatan),
      pendidikan: Number(dataPct[0].pendidikan),
    })

    loadData(dataChart)


  }, [dataPct, dataChart])


  const loadData = (dataLoad: any) => {
    const option: EChartsOption = {
      title: {
        text: "TREN PERHATIAN PUBLIK",
        textStyle: {
          color: "white",
          fontSize: 15
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any) {
          return (
            _.upperCase(params[0].name) +
            " : " +
            Intl.NumberFormat().format(params[0].value)
          );
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      yAxis: [
        {
          type: "category",
          data: _.keys(dataLoad).map((v) => (v)).filter((v) => v != "name" && v != "idArea"),
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            color: "white",
            fontSize: "12",
            fontWeight: "bold",
            formatter: function (params: any) {
              return (
                _.startCase(params)
              );
            },
          },
        },
      ],
      xAxis: [
        {
          type: "value",

          axisLabel: {
            color: "white",
            rotate: 25,
          },
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: Object.keys(dataLoad ?? []).map(
            (v: any, i: any) =>
            ({
              name: v,
              value: dataLoad[v],
              itemStyle: {
                color: COLOR_PCT[i],
              },
            })
          ),
        },
      ],
    };
    setOptions(option);
  }
  return (
    <>
      <Box
        style={{
          background: "rgba(0,0,0,0.3)",
          padding: 10,
          borderRadius: 10
        }}
      >
        <EChartsReact style={{ height: 363, }} option={options} />
      </Box>
    </>
  );
}
