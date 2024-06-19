"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box, Center } from '@mantine/core';
import { COLOR_EMOTION, WARNA } from '@/modules/_global';
import _ from 'lodash';

export default function EchartPopularityPie({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [bahasa, setBahasa] = useState<any>({
    confidence: 'Percaya Diri',
    supportive: 'Mendukung',
    positive: 'Positif',
    undecided: 'Tidak Memilih',
    unsupportive: 'Tidak Mendukung',
    uncomfortable: 'Tidak Nyaman',
    negative: 'Negatif',
    dissapproval: 'Tidak Setuju',
  })

  useShallowEffect(() => {
    loadData(data)
  }, [data])

  const loadData = (dataEmotion: any) => {
    const option: EChartsOption = {
      legend: {
        textStyle: {
          color: "white",
        },
        show: true,
        right: "-1%",
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

          // data: [
          //   {
          //     value: 78,
          //     name: 'Confidence',
          //     itemStyle: {
          //       color: "#6ABD45"
          //     }
          //   },
          //   {
          //     value: 35,
          //     name: 'Supportive',
          //     itemStyle: {
          //       color: "#98CC6F"
          //     }
          //   },
          //   {
          //     value: 58,
          //     name: 'Positive',
          //     itemStyle: {
          //       color: "#C6E2B7"
          //     }
          //   },
          //   {
          //     value: 44,
          //     name: 'Undecided',
          //     itemStyle: {
          //       color: "#FFFFFF"
          //     }
          //   },
          //   {
          //     value: 30,
          //     name: 'Unsupportive',
          //     itemStyle: {
          //       color: "#F9BEBF",
          //     }
          //   },
          //   {
          //     value: 30,
          //     name: 'Uncomfortable',
          //     itemStyle: {
          //       color: "#F37D80",
          //     }
          //   },
          //   {
          //     value: 23,
          //     name: 'Negative',
          //     itemStyle: {
          //       color: "#ED2024",
          //     }
          //   },
          //   {
          //     value: 45,
          //     name: 'Disapproval',
          //     itemStyle: {
          //       color: "#8A171A",
          //     }
          //   },
          // ],
          data: Object.keys(dataEmotion ?? []).map(
            (v: any) =>
            ({
              name: bahasa[String(v)],
              value: dataEmotion[v],
              itemStyle: {
                color:
                  COLOR_EMOTION.find((v2) => _.lowerCase(v2.name) == v)
                    ?.color ?? "gray",
              },
            })
          ),
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
