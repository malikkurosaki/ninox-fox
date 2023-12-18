"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box, Text } from '@mantine/core';

export default function DetailEchartLeader() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const option: EChartsOption = {
      // title: {
      //     text: "LEADER TRAIT ASSESSMENT",
      //     textStyle: {
      //         color: "white"
      //     }
      // },
      radiusAxis: {},
      polar: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      angleAxis: {
        type: "category",
        data: ['Honest', 'Military Background', 'Religius', 'Achievement', 'Leading Experience', 'Smart', 'Firm', 'Hard Worker', 'Populist'],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: "white",
          fontSize: "10",
        },
        startAngle: 60,
      },
      series: [
        {
          name: "Direct",
          type: "bar",
          coordinateSystem: "polar",
          barWidth: 80,
          data: [
            {
              value: 78,
              name: 'Confidence',
              itemStyle: {
                color: "#6ABD45",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",

              }
            },
            {
              value: 35,
              name: 'Supportive',
              itemStyle: {
                color: "#98CC6F",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 58,
              name: 'Positive',
              itemStyle: {
                color: "#C6E2B7",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 44,
              name: 'Undecided',
              itemStyle: {
                color: "#FFFFFF",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 47,
              name: 'Unsupportive',
              itemStyle: {
                color: "#F9BEBF",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 36,
              name: 'Uncomfortable',
              itemStyle: {
                color: "#F37D80",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 76,
              name: 'Negative',
              itemStyle: {
                color: "#ED2024",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 45,
              name: 'Disapproval',
              itemStyle: {
                color: "#8A171A",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
            {
              value: 55,
              name: 'Disapproval',
              itemStyle: {
                color: "#1ABD45",
                shadowBlur: 20,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              }
            },
          ],
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
        <Text fz={16} fw={"bold"} c={"white"}>LEADER TRAIT ASSESSMENT</Text>
        <EChartsReact style={{ height: 300, }} option={options} />
      </Box>
    </>
  );
}

