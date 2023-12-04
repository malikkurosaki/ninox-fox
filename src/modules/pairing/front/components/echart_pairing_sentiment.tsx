import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box, Group, Text } from '@mantine/core';

const dataKabupaten = [
  {
    id: 1,
    name: "DENPASAR"
  },
  {
    id: 2,
    name: "BADUNG"
  },
  {
    id: 3,
    name: "BULELENG"
  },
  {
    id: 4,
    name: "BANGLI"
  },
  {
    id: 5,
    name: "GIANYAR"
  },
  {
    id: 6,
    name: "JEMBRANA"
  },
  {
    id: 7,
    name: "KARANGASEM"
  },
  {
    id: 8,
    name: "KELUNGKUNG"
  },
  {
    id: 9,
    name: "TABANAN"
  },
]

export default function EchartPairingSentiment() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
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
      {dataKabupaten.map((item) => {
        return (
          <Box key={item.id} mb={30}>
            <Box
              style={{
                background: "rgba(0,0,0,0.3)",
                padding: 10,
                borderRadius: 10
              }}
            >
              <Group justify='space-between'>
                <Text fz={25} ml={20} fw={"bold"} c={"white"}>{item.name}</Text>
                <Text fz={16} mr={20}  c={"white"}>SENTIMENT ANALYSIS</Text>
              </Group>
              <EChartsReact style={{ height: 600, }} option={options} />
            </Box>
          </Box>
        )
      })}
    </>
  );
}
