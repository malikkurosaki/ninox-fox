import { WARNA } from '@/modules/_global/fun/WARNA';
import { Box, Grid, Group, Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import EchartTopPairingCandidate from './echart_top_pairing_candidate';

const dataCan = [
    {
        id: 1,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can2.png",
        value: "43.05 %",
        chart: "chart"
    },
    {
        id: 2,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can3.png",
        value: "33.08 %",
        chart: "chart"
    },
    {
        id: 3,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can4.png",
        value: "23.10 %",
        chart: "chart"
    },
    {
        id: 4,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can2.png",
        value: "13.15 %",
        chart: "chart"
    },
    {
        id: 5,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can3.png",
        value: "12.08 %",
        chart: "chart"
    },
    {
        id: 6,
        can: "/candidate/can1.png",
        wakilCan: "/candidate/can4.png",
        value: "11.10 %",
        chart: "chart"
    },
]

export default function TopPairingCandidate() {
    return (
        <>
            <Box>
                <Box style={{
                    background: WARNA.bg,
                    borderRadius: 10,
                    padding: 20
                }}>
                    <Box>
                        <Text c={"white"} fz={20} fw={"bold"}>TOP PAIRING CANDIDATES</Text>
                    </Box>
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 3 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        pt={30}
                    >
                        {dataCan.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <Box style={{
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                        borderRadius: 10,
                                        padding: 20
                                    }}>
                                        <Grid>
                                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                                <Group>
                                                    <Image alt='sdsd' src={item.can} maw={60} mx="auto" />
                                                    <Image alt='sdsd' src={item.wakilCan} maw={60} mx="auto" />
                                                </Group>
                                                <Box pt={20}>
                                                    <Text ta={"center"} c={"white"} fw={"bold"} fz={20}>{item.value}</Text>
                                                </Box>

                                            </Grid.Col>
                                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                                <EchartTopPairingCandidate />
                                            </Grid.Col>
                                        </Grid>
                                    </Box>
                                </Box>
                            )
                        })}

                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
}
