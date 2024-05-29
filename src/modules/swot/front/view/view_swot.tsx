"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Flex, Grid, Image, ScrollArea, Select, Stack, Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import _ from 'lodash';
import React, { useState } from 'react';
import TextAnimation from 'react-typing-dynamics';
import { funGetSwotFront } from '../..';
import { funGetOneCandidateFront } from '@/modules/candidate';

const dataSwot = [
  {
    id: 1,
    title: 'STRENGTH',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 2,
    title: 'WEAKNESS',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 3,
    title: 'OPPORTUNITY',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 4,
    title: 'THREAT',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
]

export default function ViewSwot({ data, candidate, oneCandidate }: { data: any, candidate: any, oneCandidate: any }) {
  const [isData, setData] = useState<any>()
  const [listCandidate, setListCandidate] = useState(candidate)
  const [isCandidate, setCandidate] = useState(oneCandidate?.id)
  const [isNameCan, setNameCan] = useState(oneCandidate?.name.toUpperCase())
  const [isImgCan, setImgCan] = useState(`/img/candidate/${oneCandidate?.img}`)

  useShallowEffect(() => {
    const group = _.groupBy(
      data, (v) => v.category
    )
    setData(group)
  }, [])

  async function chooseCandidate(value: any) {
    setData([])
    setCandidate((value == null) ? oneCandidate?.id : value)
    const dataDB = await funGetSwotFront({ candidate: value })
    const dataCan = await funGetOneCandidateFront({ candidate: value })
    const grouping = _.groupBy(
      dataDB, (v) => v.category
    )
    setData(grouping)
    setNameCan((dataCan?.name.toUpperCase()))
    setImgCan(`/img/candidate/${dataCan?.img}`)
  }

  return (
    <>
      {/* <PageSubTitle text1='SWOT' text2='EVALUATION' /> */}
      <PageSubTitle text1='ANALISA' text2='SWOT' />
      <Grid gutter={30}>
        <Grid.Col span={{ md: 3, lg: 3 }}>
          <Flex justify={"center"} align={"center"} style={{
            height: "80vh"
          }}>
            <Box
              w={{ base: 300, sm: 400 }}
            >
              <Box
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: 10,
                  borderRadius: 10
                }}

              >
                <Image src={isImgCan} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='kandidat' maw={200} mx="auto" />
                <Text fw={"bold"} ta={"center"} c={"white"}>{isNameCan}</Text>
              </Box>
              <Select
                mt={10}
                placeholder="Kandidat"
                data={listCandidate.map((can: any) => ({
                  value: String(can.id),
                  label: can.name
                }))}
                value={isCandidate}
                onChange={(val) => chooseCandidate(val)}
              />
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ md: 9, lg: 9 }}>
          <ScrollArea h={"85vh"}>
            {
              _.keys(isData).map((item: any, i: any) => (
                <Box key={i} pb={20}>
                  <Box
                    style={{
                      background: "rgba(0,0,0,0.3)",
                      padding: 10,
                      borderRadius: 10
                    }}
                  >
                    <Box pb={10}>
                      <Text fw={"bold"} c={"green"}>{item}</Text>
                    </Box>
                    {(() => {
                      const datanya = isData[item]
                      if (datanya)
                        return (
                          <>
                            <ScrollArea h={150} w={"a"}>
                              <Stack pl={10}>
                                <Text c={"white"} fz={14}>
                                  <TextAnimation
                                    phrases={[...datanya[_.random(0, datanya.length - 1)].content.split('\n')]}
                                    typingSpeed={(i == 0) ? 0 : Number(datanya.id ? Math.floor(Math.random() * 1 + 0) : Math.floor(Math.random() * 1 + 5))}
                                    backspaceDelay={Number(datanya.id ? Math.floor(Math.random() * 899999 + 100000) : Math.floor(Math.random() * 899999 + 100000))}
                                    eraseDelay={Number(datanya.id ? Math.floor(Math.random() * 899999 + 100000) : Math.floor(Math.random() * 899999 + 100000))}
                                    timeComplete={Number(datanya.id ? Math.floor(Math.random() * 899999 + 100000) : Math.floor(Math.random() * 899999 + 100000))}
                                    errorProbability={Number(datanya.id ? 0 : 0.1)}
                                    eraseOnComplete={false}
                                    isSecure={false}
                                  />
                                </Text>
                              </Stack>
                            </ScrollArea>
                          </>
                        )
                    })()}
                  </Box>
                </Box>
              ))
            }
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </>
  );
}
