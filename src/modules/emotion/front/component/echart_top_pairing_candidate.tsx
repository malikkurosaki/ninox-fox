import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box } from '@mantine/core';
import { WARNA } from '@/modules/_global';

export default function EchartTopPairingCandidate() {
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
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  show: false,
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  show: false,
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
                  name: 'Top Candidate',
                  type: 'bar',
                  barWidth: '60%',
                  data: [10, 52,40, 33, 30, 40, 67],
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
