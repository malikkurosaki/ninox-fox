"use client"
import { Box, Button, Flex, Grid, Group, Image, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartPopularityLine from '../components/echart_popularity_line';
import EchartPopularityPie from '../components/echart_popularity_pie';
import { PageSubTitle } from '@/modules/_global';

export default function ViewPopularity() {
  return (
    <>
      <PageSubTitle text1='POPULARITY' text2='METRIC' />
      <Stack pt={20}>
        <Grid gutter={'lg'}>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <Box
            >
              <Text ta={"center"} c={"white"} fz={25} fw={"bold"}>CALON GUBERNUR BALI 2024</Text>
              <Group justify='space-evenly' gap={30} pt={30}>
                <Box>
                  <Image src={"/candidate/candidate.png"} alt="candidate" h={200} w="auto" />
                  <Text mt={20} c={"white"} ta={"center"}>I WAYAN COSTER</Text>
                </Box>
                <Box>
                  <Image src={"/candidate/candidate2-round.png"} alt="candidate" h={200} w="auto" />
                  <Text mt={20} c={"white"} ta={"center"}> I NYOMAN GIRI</Text>
                </Box>
              </Group>

            </Box>
          </Grid.Col>
          <Grid.Col span={{ md: 6, lg: 6 }}>
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 3 }}
              spacing={{ base: 10, sm: 'xl' }}
            >

              <Select
                placeholder="Candidate 1"
                data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
              />
              <Select
                placeholder="Candidate 2"
                data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
              />
              <Button fullWidth bg={"white"} c={"dark"}>GENERATE</Button>
            </SimpleGrid>
            <Box pt={50}>
              <Text ta={"center"} c={"white"} fw={"bold"} fz={30}>SUCCESS PROBABILITY PROJECTION</Text>
              <Text ta={"center"} c={"#1EBA1B"} fw={"bold"} fz={120}>57.99 %</Text>
            </Box>
          </Grid.Col>
        </Grid>
        <Grid gutter={30}>
          <Grid.Col span={{ md: 7, lg: 7 }}>
            <EchartPopularityLine />
          </Grid.Col>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <EchartPopularityPie />
          </Grid.Col>
        </Grid>
      </Stack>
    </>
  );
}
