"use client"
import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box, Text } from '@mantine/core';
import _ from 'lodash';
import { COLOR_EMOTION } from '@/modules/_global';

export default function EchartLeader({ dataLta }: { dataLta: any }) {
    const [options, setOptions] = useState<EChartsOption>({})
    const [dataChart, setDataChart] = useState<any>()

    useShallowEffect(() => {
        setDataChart({
            pekerja_keras: dataLta[0].pekerjaKeras,
            cerdas: dataLta[0].cerdas,
            jujur: dataLta[0].jujur,
            merakyat: dataLta[0].merakyat,
            tegas: dataLta[0].tegas,
            berpengalaman_memimpin: dataLta[0].berpengalamanMemimpin,
            berprestasi: dataLta[0].berprestasi,
            latar_belakang_militer: dataLta[0].latarBelakangMiliter,
            agamis: dataLta[0].agamis,
        })

        loadData(dataChart)

    }, [dataChart, dataLta])

    const loadData = (dataLoad: any) => {
        const option: EChartsOption = {
            radiusAxis: {},
            polar: {},
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
                formatter: function (params: any) {
                    return _.upperCase(params[0].name) + " : " + params[0].value + "%";
                },
            },
            angleAxis: {
                type: "category",
                data: _.keys(dataLoad).map((v) => (v)).filter((v) => v != "name" && v != "idArea"),
                axisTick: {
                    alignWithLabel: true,
                },
                axisLabel: {
                    color: "white",
                    fontSize: "10",
                    formatter: function (params: any) {
                        return _.startCase(params);
                    },
                },
                startAngle: 60,
            },
            series: [
                {
                    name: "Direct",
                    type: "bar",
                    coordinateSystem: "polar",
                    barWidth: 80,
                    data: Object.keys(dataLoad ?? []).map(
                        (v: any, i: any) =>
                        ({
                            name: v,
                            value: dataLoad[v],
                            itemStyle: {
                                color:
                                    COLOR_EMOTION.find((v2) => v2.id == String(i))
                                        ?.color ?? "gray",
                            },
                        })
                    ),
                    itemStyle: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
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
                <Text fz={18} fw={"bold"} c={"white"}>PENILAIAN SIFAT PEMIMPIN</Text>
                <EChartsReact style={{ height: 300, }} option={options} />
            </Box>
        </>
    );
}

