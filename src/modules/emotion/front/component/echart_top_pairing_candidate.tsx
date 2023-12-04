import React, { useState } from 'react';
import { EChartsOption, color } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from '@mantine/hooks';
import { Box } from '@mantine/core';
import { WARNA } from '@/modules/_global/fun/WARNA';

export default function EchartTopPairingCandidate() {
    const [options, setOptions] = useState<EChartsOption>({});

    useShallowEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const option: EChartsOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu'],
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            tooltip: {
                trigger: 'axis'
            },
            series: [
                {
                    data: [10, 33, 30, 40],
                    name: "Candidate ",
                    type: 'line',
                    color: WARNA.hijau,
                    smooth: true,
                    showSymbol: false,
                }
            ]
        };
        setOptions(option);
    }

    return (
        <>
        <Box pt={20}>
            <EChartsReact style={{ height: 100, width: "auto" }} option={options} />
        </Box>
        </>
    );
}
