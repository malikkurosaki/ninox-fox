"use client"
import { Box, Button, Center, Divider, Grid, Group, Image, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import EchartPairingSentiment from '../components/echart_pairing_sentiment';
import { PageSubTitle } from '@/modules/_global';
import _ from 'lodash';
import { funGetPairingRegional } from '../..';

export default function ViewPairingFront({ candidate, data, area }: { candidate: any, data: any, area: any }) {
  const [isData, setData] = useState(data)
  const [isCandidate1, setCandidate1] = useState(data.candidate.idCandidate1)
  const [isCandidate2, setCandidate2] = useState(data.candidate.idCandidate2)
  const [isAllBarChart, setAllBarChart] = useState(data.chart)
  const [isBarChart, setBarChart] = useState(data.chart)
  const [isArea, setArea] = useState<any>(null)

  async function onGenerate() {
    const data = await funGetPairingRegional({ candidate1: isCandidate1, candidate2: isCandidate2 })
    setData(data)
    setBarChart(data.chart)
    setAllBarChart(data.chart)
  }


  function onFilter(val: any) {
    setArea(val)
    if (_.isNull(val)) {
      onGenerate()
    } else {
      const hasilFilter = isAllBarChart.filter((i: any) => i.idArea == val)
      setBarChart(hasilFilter)
    }
  }

  return (
    <>
      <PageSubTitle text1='DATA PASANGAN' text2='REGIONAL' />
      <Box
        style={{
          // backgroundColor: WARNA.ungu,
          position: "sticky",
          top: 0,
          zIndex: 99,
          // padding: 10,
          paddingBottom: 10
        }}
      >
        <Group justify='flex-end'
        >
          {/* <TextInput w={300} mt={20} placeholder='Cari' /> */}
          <Select
            placeholder="Pilih wilayah"
            data={area.map((pro: any) => ({
              value: String(pro.id),
              label: pro.name
            }))}
            value={isArea}
            onChange={(val: any) => onFilter(val)}
          />
        </Group>
      </Box>
      <Stack pt={20}>
        <Grid gutter={30}>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <Box
            >
              <Box
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: 10,
                  borderRadius: 10
                }}
              >
                <SimpleGrid
                  cols={{ sm: 2, lg: 2 }}
                  spacing={{ base: 10, sm: 'xl' }}
                  verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                  <Center>
                    <Box p={10}>
                      <Image src={`/img/candidate/${isData.candidate.imgCandidate1}`} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='kandidat 1' h={200} w="auto" />
                      <Text fw={"bold"} mt={10} ta={"center"} c={"white"}>{_.upperCase(isData.candidate.nameCandidate1)}</Text>
                      <Text  c={"white"} ta={"center"} fz={13}>CALON GUBERNUR</Text>
                    </Box>
                  </Center>
                  <Box p={10}>
                    <Image src={`/img/candidate/${isData.candidate.imgCandidate2}`} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='kandidat 2' h={200} w="auto" />
                    <Text fw={"bold"} mt={10} ta={"center"} c={"white"}>{_.upperCase(isData.candidate.nameCandidate2)}</Text>
                    <Text  c={"white"} ta={"center"} fz={13}>CALON WAKIL GUBERNUR</Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <Group>

              </Group>
              <Select
                mt={20}
                placeholder="Kandidat 1"
                data={candidate.map((can: any) => ({
                  value: String(can.id),
                  label: can.name
                }))}
                value={isCandidate1}
                onChange={(val) => { setCandidate1(val) }}
              />
              <Select
                mt={20}
                placeholder="Kandidat 2"
                data={candidate.map((can: any) => ({
                  value: String(can.id),
                  label: can.name
                }))}
                value={isCandidate2}
                onChange={(val) => { setCandidate2(val) }}
              />
              <Button fullWidth mt={20} c={"dark"} bg={"white"} onClick={onGenerate}>HASIL</Button>

              <Box pt={45}>
                <Text ta={"center"} fz={20} c={"white"}>PROBABILITAS KESUKSESAN</Text>
              </Box>
              <Box pt={10}>
                <Text ta={"center"} fz={70} fw={"bold"} c={"green"}>{(_.isUndefined(isData.rate) ? '00.00' : isData.rate)} %</Text>
              </Box>
            </Box>

          </Grid.Col>
          <Grid.Col span={{ md: 7, lg: 7 }}>
            <ScrollArea h={"74vh"}>
              {
                isBarChart.map((item: any, i: any) => {
                  return (
                    <Box key={i} mb={30}>
                      <EchartPairingSentiment data={item} />
                    </Box>
                  )
                })
              }
            </ScrollArea>
          </Grid.Col>
        </Grid>

      </Stack>

    </>
  );
}
