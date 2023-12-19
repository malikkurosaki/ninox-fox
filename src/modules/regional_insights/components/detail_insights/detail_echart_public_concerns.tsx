"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box } from '@mantine/core';

export default function DetailEchartPublicConcerns() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    const option: EChartsOption = {
      title: {
        text: "PUBLIC CONCERNS TRENDS",
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
          data: ['Education', 'Health Services', 'Infrastructure', 'Poverty', 'Social Justice', 'Jobs'],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            color: "white",
            fontSize: "12",
            fontWeight: "bold",
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
          data: [
            {
              value: 78,
              itemStyle: {
                color: "#6ABD45"
              }
            },
            {
              value: 35,
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
              itemStyle: {
                color: "#FFFFFF"
              }
            },
            {
              value: 30,
              itemStyle: {
                color: "#F9BEBF",
              }
            },
            {
              value: 30,
              itemStyle: {
                color: "#F37D80",
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
        <EChartsReact style={{ height: 363, }} option={options} />
      </Box>
    </>
  );
}
