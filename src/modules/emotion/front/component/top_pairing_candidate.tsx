import { PageSubTitle } from '@/modules/_global';
import { WARNA } from '@/modules/_global/fun/WARNA';
import { Box, Flex, Grid, Group, Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import EchartTopPairingCandidate from './echart_top_pairing_candidate';

const dataCan = [
    {
        id: 1,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "43.05 %",
        chart: "chart"
    },
    {
        id: 2,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "33.08 %",
        chart: "chart"
    },
    {
        id: 3,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "23.10 %",
        chart: "chart"
    },
    {
        id: 4,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "13.15 %",
        chart: "chart"
    },
    {
        id: 5,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "12.08 %",
        chart: "chart"
    },
    {
        id: 6,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2.png",
        value: "11.10 %",
        chart: "chart"
    },
]

export default function TopPairingCandidate() {
    return (
        <>
            <Box>
                <Box style={{
                    // background: WARNA.bg,
                    // borderRadius: 10,
                    // padding: 20
                }}>
                    {/* <Box>
                        <Text c={"white"} fz={25} fw={"bold"}>TOP PAIRING CANDIDATES</Text>
                    </Box> */}
                     <PageSubTitle text1='TOP PAIRING' text2='CANDIDATES' />
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 2 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        pt={10}
                    >
                        {dataCan.map((item) => {
                            return (
                                <Box key={item.id}>
                                    <Box style={{
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                        borderRadius: 10,
                                        padding: 10
                                    }}>
                                        <Grid gutter={0}>
                                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                                <Box pt={"3vh"}>
                                                    <Group justify='center'>
                                                        <Image alt='sdsd' src={item.can} maw={100} mx="auto" />
                                                        <Image alt='sdsd' src={item.wakilCan} maw={100} mx="auto" />
                                                    </Group>
                                                    <Box pt={20}>
                                                        <Text ta={"center"} c={"white"} fw={"bold"} fz={35}>{item.value}</Text>
                                                    </Box>
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
