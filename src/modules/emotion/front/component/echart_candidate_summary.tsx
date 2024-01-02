'use client'
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import * as echarts from 'echarts';
import { Box, Button, Divider, Group } from '@mantine/core';

export default function EchartCandidateSummary() {
    const [options, setOptions] = useState<EChartsOption>({});

    useShallowEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const option: EChartsOption = {
            color: ['green', 'gray', 'red'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
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
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel: {
                        color: "white",
                        rotate: 30
                    }
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
                },
            ],
            series: [
                {
                    name: 'Positive',
                    type: 'line',
                    showSymbol: false,
                    data: [10, 32, 56, 21, 55, 40, 50],
                    stack: 'z',
                    color: 'green',
                    areaStyle: {
                        opacity: 1,
                        // color: "#076918"
                        color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgb(35,13,55)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(8,106,24,1)'
                            }
                        ])
                    },
                    smooth: true,
                },
                {
                    name: 'Neutral',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    data: [20, 21, 5, 41, 22, 34, 31],
                    color: "#EBEBEB",
                    stack: 'x',
                    areaStyle: {
                        opacity: 1,
                        // color: "#FFFFFF"
                        color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgb(35,13,55)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,1)'
                            }
                        ])
                    }
                },
                {
                    name: 'Negative',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    data: [20, 22, 22, 14, 19, 30, 66],
                    color: "red",
                    stack: 'y',
                    areaStyle: {
                        opacity: 1,
                        // color: "#A71211"
                        color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                            {
                                offset: 0,
                                color: 'rgb(35,13,55)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(124,3,13,1)'
                            }
                        ])
                    }
                },

            ]
        }
        setOptions(option);
    }
    return (
        <>
            <Box
                // style={{
                //     background: "rgba(0,0,0,0.3)",
                //     padding: 10,
                //     borderRadius: 10
                // }}
            >
                <Group justify='flex-end'>
                    <Group>
                        <Button variant='subtle' c={"white"}>Month</Button>
                        <Divider orientation="vertical" />
                        <Button variant='subtle' c={"white"}>Week</Button>
                        <Divider orientation="vertical" />
                        <Button variant='subtle' c={"white"}>Custom</Button>
                    </Group>
                </Group>
                <EChartsReact style={{
                    height: 320
                }} option={options} />
            </Box>
        </>
    );
}
