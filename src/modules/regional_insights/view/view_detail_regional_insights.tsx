"use client"
import { ActionIcon, Anchor, Box, Breadcrumbs, Button, Grid, Group, Select, Stack, Text, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5"
import DetailEchartSentimentAnalysis from '../components/detail_insights/detail_echart_sentiment_analysis';
import DetailEchartPublicConcerns from '../components/detail_insights/detail_echart_public_concerns';
import DetailEchartLeader from '../components/detail_insights/detail_echart_leader';
// import DetailRegionHotIssue from '../components/detail_insights/detail_region_hot_issue';
import { PageSubTitle, WARNA } from '@/modules/_global';
import { DetailRegionHotIssue } from '..';
import _ from 'lodash';

const dataDenpasar = [
  {
    id: 1,
    name: "DENPASAR BARAT"
  },
  {
    id: 2,
    name: "DENPASAR SELATAN"
  },
  {
    id: 3,
    name: "DENPASAR TIMUR"
  },
  {
    id: 4,
    name: "DENPASAR UTARA"
  },
]


export default function ViewDetailRegionalInsights({ emotion, area, audience, pct, lta, rhi, wilayah }: { emotion: any, area: any, audience: any, pct: any, lta: any, rhi: any, wilayah: any }) {
  const router = useRouter()
  const [isWilayah, setWilayah] = useState<any>(null)
  const [emotionTampil, setEmotionTampil] = useState(emotion)

  function setFilter(val: any) {
    setWilayah(val)
    if (val == null) {
      setEmotionTampil(emotion)
    } else {
      const filter = emotion.filter((i: any) => i.id == val)
      setEmotionTampil(filter)
    }
  }

  return (
    <>
      <PageSubTitle text1='DETAIL WAWASAN' text2='REGIONAL' />
      <Box pt={20} style={{
        backgroundColor: WARNA.ungu,
        position: "sticky",
        top: 0,
        zIndex: 99,
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <Group>
            <Text fz={26} fw={"bold"} c={"white"}>{_.upperCase(area)}</Text>
          <Group>
            <Select
              placeholder="Pilih Wilayah"
              data={wilayah.map((wil: any) => ({
                value: String(wil.id),
                label: wil.name
              }))}
              value={isWilayah}
              onChange={(val) => setFilter(val)}
            />
            <ActionIcon variant="subtle" color='white' aria-label="back" onClick={() => router.back()}>
              <IoCloseSharp size={30} />
            </ActionIcon>
          </Group>
        </Group>
      </Box>
      <Stack pt={20}>
        {emotionTampil && emotionTampil.map((item: any, i: any) => {
          return (
            <Box key={item.id} pb={30}>
              <Box pt={10}>
                <Text fz={22} fw={"bold"} c={"white"}>{_.upperCase(item.name)}</Text>
              </Box>
              <Grid gutter={25}>
                <Grid.Col span={{ md: 6, lg: 6 }}>
                  <DetailEchartSentimentAnalysis dataEmotion={item} dataLocked={audience} />
                </Grid.Col>
                <Grid.Col span={{ md: 6, lg: 6 }}>
                  <DetailEchartPublicConcerns dataPct={pct.filter((v: any) => v.idArea === item.id)} />
                </Grid.Col>
              </Grid>
              <Grid gutter={25} pt={25}>
                <Grid.Col span={{ md: 5, lg: 5 }}>
                  <DetailEchartLeader dataLta={lta.filter((v: any) => v.idArea === item.id)} />
                </Grid.Col>
                <Grid.Col span={{ md: 7, lg: 7 }}>
                  <DetailRegionHotIssue data={rhi.filter((v: any) => v.idArea === item.id)} />
                </Grid.Col>
              </Grid>
            </Box>
          )
        })}
      </Stack>
    </>
  );
}
