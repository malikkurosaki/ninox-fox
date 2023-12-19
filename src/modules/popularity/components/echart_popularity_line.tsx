"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import * as echarts from 'echarts';
import { Box, Center } from '@mantine/core';
import { WARNA } from '@/modules/_global';


export default function EchartPopularityLine() {
    const [options, setOptions] = useState<EChartsOption>({});

    useShallowEffect(() => {
        loadData()
    }, [])
    const loadData = () => {
        const option: EChartsOption = {
            xAxis: [
                {
                    type: 'category',
                    data: ['2023-10-16', '2023-10-17', '2023-10-18', "2023-10-19", "2023-10-20", "2023-10-21", "2023-10-22", "2023-10-23"],
                    boundaryGap: false,
                    axisLabel: {
                        verticalAlign: "middle",
                        rotate: 25,
                        color: "white"
                    },
                },

            ],
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: (a: any) => {
                        return `${a} %`;
                    },
                    color: "white"
                },

            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    data: [40, 50, 40, 66, 83, 72, 33, 42],
                    type: 'line',
                    color: WARNA.hijau,
                    showSymbol: false,
                    areaStyle: {
                        opacity: 1,
                        color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgb(24,0,60)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(4,60,24,1)'
                            }
                        ])
                    },

                }
            ]
        }
        setOptions(option);
    }
    return (
        <>
            <Box pt={20}>
                    <EChartsReact style={{ height: 400, width: "auto" }} option={options} />
            </Box>
        </>
    );
}

