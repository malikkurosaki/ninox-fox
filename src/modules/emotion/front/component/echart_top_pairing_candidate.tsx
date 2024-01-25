'use client'
import React, { useEffect, useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box } from '@mantine/core';
import { WARNA } from '@/modules/_global';
import moment from 'moment';
import { funGetPairingChartSummary } from '@/modules/pairing';

export default function EchartTopPairingCandidate({ candidate1, candidate2 }: { candidate1: any, candidate2: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const today = moment(new Date()).format("YYYY-MM-DD")
  const sevenday = moment(new Date()).subtract(7, "days").format("YYYY-MM-DD")

  useShallowEffect(() => {
    loadFirst(candidate1, candidate2)
  }, [candidate1, candidate2])

  async function loadFirst(can1: any, can2: any) {
    const dataCoba = await funGetPairingChartSummary({ candidate1: can1, candidate2: can2, startDate: sevenday, endDate: today })
    loadData(dataCoba)
  }

  const loadData = (dataChart: any) => {
    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '8%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: !dataChart
            ? []
            : dataChart!.map((v: any) => moment(v.dateEmotion).format('DD-MM-YYYY')),
          show: true,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            verticalAlign: "middle",
            rotate: 25,
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: true,
          max: "100",
          splitLine: {
            lineStyle: {
              color: "gray",
              opacity: 0.5
            }
          },
          axisLabel: {
            formatter: (a: any) => {
              return `${a} %`;
            },
            color: "white"
          },
        }
      ],
      series: [
        {
          name: 'Pasangan Kandidat Teratas',
          type: 'bar',
          barWidth: '60%',
          data: !dataChart
            ? []
            : dataChart!.map((v: any) => v.rate),
          color: WARNA.hijau_emotion
        }
      ]
    };
    setOptions(option);
  }

  return (
    <>
      <Box>
        <EChartsReact style={{ height: 200 }} option={options} />
      </Box>
    </>
  );
}
