"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box, Button, Center, Grid, Group, Text } from '@mantine/core';
import { WARNA } from '@/modules/_global/fun/WARNA';
import { useRouter } from 'next/navigation';

export default function DetailEchartSentimentAnalysis() {
  const router = useRouter()
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const option: EChartsOption = {
      title: {
        text: "SENTIMENT ANALYSIS",
        textStyle: {
          color: "white",
          fontSize: 15
        }
      },
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
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Confidence', 'Supportive', 'Positive', 'Undecided', 'Unsupportive', 'Uncomfortable', 'Negative', 'Disapproval'],
          axisLabel: {
            rotate: 45,
            color: "white",
            fontSize: 10
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            show: true,
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
            formatter: `{value}% `,
            color: "white"
          },
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '70%',
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
        }
      ]
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
        <EChartsReact style={{ height: 300, }} option={options} />
        <Group justify='space-between'>
          <Group pl={30}>
            <Box mr={20}>
              <Text c={WARNA.merah_emotion} fz={15}>Filtered Audience</Text>
              <Text ta={'center'} c={WARNA.hijau_emotion} fz={25} fw={'bold'}>2.801.891</Text>
            </Box>
            <Box>
              <Text c={WARNA.merah_emotion} fz={15}>Locked Audience</Text>
              <Text ta={'center'} c={WARNA.hijau_emotion} fz={25} fw={'bold'}>3.810.901</Text>
            </Box>
          </Group>
        </Group>
      </Box>
    </>
  );
}
