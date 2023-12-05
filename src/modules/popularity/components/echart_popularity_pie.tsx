import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import * as echarts from 'echarts';
import { WARNA } from '@/modules/_global/fun/WARNA';
import { COLOR_EMOTION } from '@/modules/_global/fun/COLOR_EMOTION';
import { Box, Center } from '@mantine/core';

export default function EchartPopularityPie() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const option: EChartsOption = {
      // tooltip: {
      //   trigger: 'item'
      // },
      legend: {
        textStyle: {
          color: "white",
        },
        show: true,
        right: "0%",
        top: "25%",
        orient: "vertical",
      },
      series: [
        {
          name: 'POPULARITY METRIC',
          type: 'pie',
          radius: ['40%', '100%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 2,
            borderColor: WARNA.bg,
            borderWidth: 2
          },
          label: {
            // show: false,
            position: "inner",
            formatter: (a) => {
              return `${a.value + "%"}`;
            },
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          labelLine: {
            show: false
          },

          data: [
            {
              value: 78,
              name: 'Confidence',
              itemStyle: {
                color: "#6ABD45"
              }
            },
            {
              value: 35,
              name: 'Supportive',
              itemStyle: {
                color: "#98CC6F"
              }
            },
            {
              value: 58,
              name: 'Positive',
              itemStyle: {
                color: "#C6E2B7"
              }
            },
            {
              value: 44,
              name: 'Undecided',
              itemStyle: {
                color: "#FFFFFF"
              }
            },
            {
              value: 30,
              name: 'Unsupportive',
              itemStyle: {
                color: "#F9BEBF",
              }
            },
            {
              value: 30,
              name: 'Uncomfortable',
              itemStyle: {
                color: "#F37D80",
              }
            },
            {
              value: 23,
              name: 'Negative',
              itemStyle: {
                color: "#ED2024",
              }
            },
            {
              value: 45,
              name: 'Disapproval',
              itemStyle: {
                color: "#8A171A",
              }
            },
          ],
          width: "68%",
          right: "80%",
          left: "0%",
          height: "100%",
        }
      ]
    };


    setOptions(option);
  }





  return (
    <>
    <Box pt={20}>
        <Center>
        <EChartsReact style={{
          height: 400,
          width: 400,
        }} option={options} />
        </Center>
    </Box>
    </>
  );
}
