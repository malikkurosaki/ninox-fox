'use client'
import { PageSubTitle } from '@/modules/_global';
import { WARNA } from '@/modules/_global/fun/WARNA';
import { Box, Flex, Grid, Group, Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import EchartTopPairingCandidate from './echart_top_pairing_candidate';

const dataCan = [
    {
        id: 1,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "43.05 %",
        chart: "chart"
    },
    {
        id: 2,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "33.08 %",
        chart: "chart"
    },
    {
        id: 3,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "23.10 %",
        chart: "chart"
    },
    {
        id: 4,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "13.15 %",
        chart: "chart"
    },
    {
        id: 5,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "12.08 %",
        chart: "chart"
    },
    {
        id: 6,
        can: "/candidate/candidate2.png",
        wakilCan: "/candidate/candidate2-square.png",
        value: "11.10 %",
        chart: "chart"
    },
]

export default function TopPairingCandidate({ pairingCandidate }: { pairingCandidate: any }) {
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
                    <PageSubTitle text1='PASANGAN KANDIDAT' text2='TERATAS' />
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 2 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        pt={10}
                    >
                        {pairingCandidate.map((item:any, i:any) => {
                            return (
                                <Box key={i}>
                                    <Box style={{
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                        borderRadius: 10,
                                        padding: 10
                                    }}>
                                        <Grid gutter={0}>
                                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                                <Box pt={"3vh"}>
                                                    <Group justify='space-around'>
                                                        <Image alt='Kandidat 1' src={`/img/candidate/${item.imgCandidate1}`} radius={'7%'} maw={100} mx="auto" />
                                                        <Image alt='Kandidat 2' src={`/img/candidate/${item.imgCandidate2}`} radius={'7%'} maw={100} mx="auto" />
                                                    </Group>
                                                    <Box pt={20}>
                                                        <Text ta={"center"} c={"white"} fw={"bold"} fz={35}>{item.rate} %</Text>
                                                    </Box>
                                                </Box>

                                            </Grid.Col>
                                            <Grid.Col span={{ md: 6, lg: 6 }}>
                                                <EchartTopPairingCandidate candidate1={item.idCandidate1} candidate2={item.idCandidate2} />
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
