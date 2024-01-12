"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import * as echarts from 'echarts';
import { Box, Button, Center, Divider, Group, Menu } from '@mantine/core';
import { WARNA } from '@/modules/_global';
import { DatePicker } from '@mantine/dates';
import moment from 'moment';
import toast from 'react-simple-toasts';
import { funGetRateChart } from '..';


export default function EchartPopularityLine({ data, candidate }: { data: any, candidate: any }) {
    const [options, setOptions] = useState<EChartsOption>({})
    const [listData, setListData] = useState(data)
    const [isButton, setButton] = useState('week')
    const [newDateStart, setNewDateStart] = useState(moment(new Date("2023-09-01")).format("YYYY-MM-DD"))
    const [newDateEnd, setNewDateEnd] = useState(moment(new Date()).format("YYYY-MM-DD"))
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
    const [showPopDate, setPopDate] = useState(false)
    const [okButton, setOkButton] = useState(false)


    async function onChooseTime(time: any) {
        let startDate
        setButton(time)
        let endDate = moment(new Date()).format('YYYY-MM-DD')

        if (time == 'month') {
            startDate = moment(new Date()).subtract(1, "months").format("YYYY-MM-DD")
        } else if (time == 'week') {
            startDate = moment(new Date()).subtract(7, "days").format("YYYY-MM-DD");
        } else if (time == 'custom') {
            startDate = newDateStart
            endDate = newDateEnd
        }

        if (time == 'custom') setPopDate(false)

        const loadChart = await funGetRateChart({ candidate1: candidate.idCandidate1, candidate2: candidate.idCandidate2, startDate: startDate, endDate: endDate })
        setListData(loadChart)
        loadData(loadChart)
    }

    useShallowEffect(() => {
        loadData(data)
        setButton('week')
    }, [data])
    const loadData = (dataChart: any) => {
        const option: EChartsOption = {
            xAxis: [
                {
                    type: 'category',
                    data: !dataChart
                        ? []
                        : dataChart!.map((v: any) => moment(v.dateEmotion).format('DD-MM-YYYY')),
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
                max: "100",
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
                    data: !dataChart
                        ? []
                        : dataChart!.map((v: any) => v.rate),
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
                <Group justify='flex-end' mr={50}>
                    <Group>
                        <Button variant={(isButton == 'week') ? 'filled' : 'subtle'} c={"white"} onClick={() => onChooseTime('week')}>Minggu</Button>
                        <Divider orientation="vertical" />
                        <Button variant={(isButton == 'month') ? 'filled' : 'subtle'} c={"white"} onClick={() => onChooseTime('month')}>Bulan</Button>
                        <Divider orientation="vertical" />
                        <Menu opened={showPopDate} position='bottom-end'>
                            <Menu.Target>
                                <Button variant={(isButton == 'custom') ? 'filled' : 'subtle'} c={"white"} onClick={() => setPopDate(true)}>Kustom</Button>
                            </Menu.Target>
                            <Menu.Dropdown p={20}>
                                <DatePicker
                                    type="range"
                                    value={value}
                                    minDate={new Date('2023-09-01')}
                                    maxDate={new Date()}
                                    onChange={(v) => {
                                        setValue(v)
                                        if (v[0] && v[1]) {
                                            const diferent = moment(v[1]).diff(
                                                moment(v[0]),
                                                "days"
                                            );

                                            if (diferent < 8)
                                                return toast('Please select date more than 7 days, or user 1 week option button', { theme: 'dark' });
                                            setNewDateStart(moment(v[0]).format("YYYY-MM-DD"))
                                            setNewDateEnd(moment(v[1]).format("YYYY-MM-DD"))
                                            setOkButton(true);
                                        } else {
                                            setOkButton(false);
                                        }
                                    }
                                    }
                                />
                                <Group justify="space-between" mt={10} >
                                    <Button
                                        onClick={() => setPopDate(false)}
                                        w={100}
                                        p={10}
                                        variant="outline"
                                        style={{
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        CANCEL
                                    </Button>
                                    {okButton && (
                                        <Button
                                            onClick={() => { onChooseTime('custom') }}
                                            w={100}
                                            variant="filled"
                                        >
                                            OK
                                        </Button>
                                    )}
                                </Group>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Group>
                <EChartsReact style={{ height: 400, width: "auto" }} option={options} />
            </Box>
        </>
    );
}

