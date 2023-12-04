"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { Box, Button, Grid, Group, Image, Select, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import EchartSentimentAnalysis from '../components/echart_sentiment_analysis';
import EchartPublicConcerns from '../components/echart_public_concerns';
import EchartLeader from '../components/echart_leader';

const dataKabupaten = [
  {
    id: 1,
    name: "DENPASAR"
  },
  {
    id: 2,
    name: "BADUNG"
  },
  {
    id: 3,
    name: "BULELENG"
  },
  {
    id: 4,
    name: "BANGLI"
  },
  {
    id: 5,
    name: "GIANYAR"
  },
  {
    id: 6,
    name: "JEMBRANA"
  },
  {
    id: 7,
    name: "KARANGASEM"
  },
  {
    id: 8,
    name: "KELUNGKUNG"
  },
  {
    id: 9,
    name: "TABANAN"
  },
]

export default function ViewRegionalInsights() {
  return (
    <>
      <PageSubTitle text1='REGIONAL' text2='INSIGHTS' />
      <Stack pt={20}>
        <Group justify='flex-end'>
          <Select
            placeholder=" Select Candidate"
            data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
          />
          <Button c={"dark"} bg={"white"}>GENERATE</Button>
        </Group>
        {dataKabupaten.map((item) => {
          return (
            <Box key={item.id}>
              <Group justify='space-between'>
                <Text fz={26} fw={"bold"} c={"white"}>{item.name}</Text>
              </Group>
              <EchartSentimentAnalysis />
              <Grid gutter={30} pt={20} pb={30}>
                <Grid.Col span={{ md: 8, lg: 8 }}>
                  <EchartPublicConcerns />
                </Grid.Col>
                <Grid.Col span={{ md: 4, lg: 4 }}>
                  <EchartLeader />
                </Grid.Col> 
              </Grid>
            </Box>
          )
        })}
      </Stack>

    </>
  );
}
