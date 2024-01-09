"use client"
import { Box, Button, Grid, Group, Image, Select, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import EchartSentimentAnalysis from '../components/echart_sentiment_analysis';
import EchartPublicConcerns from '../components/echart_public_concerns';
import EchartLeader from '../components/echart_leader';
import { useRouter } from 'next/navigation';
import { PageSubTitle, WARNA } from '@/modules/_global';

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

export default function ViewRegionalInsights({ candidate, emotion, audience, pct, lta }: { candidate: any, emotion: any, audience: any, pct: any, lta: any }) {
  const router = useRouter()
  const [listCandidate, setListCandidate] = useState(candidate)
  const [isCandidate, setCandidate] = useState(candidate[0]?.id)
  const [isData, setData] = useState(emotion)
  
  return (
    <>
      <PageSubTitle text1='WAWASAN' text2='REGIONAL' />
      <Stack pt={20}>
        <Box
          style={{
            backgroundColor: WARNA.ungu,
            position: "sticky",
            top: 0,
            zIndex: 99,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <Group justify='flex-end'>
            <Select
              mt={10}
              placeholder="Kandidat"
              data={listCandidate.map((can: any) => ({
                value: String(can.id),
                label: can.name
              }))}
              value={isCandidate}
            // onChange={(val) => chooseCandidate(val)}
            />
            <Button c={"dark"} bg={"white"}>HASIL</Button>
          </Group>
        </Box>
        {isData.map((item: any, i: any) => {
          return (
            <Box key={item.id} pt={20}>
              <Group justify='space-between' pb={10}>
                <Text fz={26} fw={"bold"} c={"white"}>{item.name}</Text>
                <Box>
                  <Button w={130} c={"dark"} bg={"white"} onClick={() => router.push("/insights/detail/1")}>DETAIL</Button>
                </Box>
              </Group>
              <EchartSentimentAnalysis dataEmotion={item} dataLocked={audience} />
              <Grid gutter={30} pt={20} pb={30}>
                <Grid.Col span={{ md: 8, lg: 8 }}>
                  <EchartPublicConcerns dataPct={pct.filter((v: any) => v.idArea === item.id)} />
                </Grid.Col>
                <Grid.Col span={{ md: 4, lg: 4 }}>
                  <EchartLeader dataLta={lta.filter((v: any) => v.idArea === item.id)} />
                </Grid.Col>
              </Grid>
            </Box>
          )
        })}
      </Stack>

    </>
  );
}
