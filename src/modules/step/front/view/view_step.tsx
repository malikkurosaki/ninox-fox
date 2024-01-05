"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Flex, Grid, Image, ScrollArea, Select, Stack, Text, TextInput } from '@mantine/core';
import _ from 'lodash';
import React, { useState } from 'react';
import TextAnimation from 'react-typing-dynamics';
import { funGetStepFront } from '../..';
import { funGetOneCandidateFront } from '@/modules/candidate';

const dataStep = [
  {
    id: 1,
    title: 'SOCIAL',
    positive: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
    negative: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 2,
    title: 'TECHNOLOGY',
    positive: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
    negative: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 3,
    title: 'ECONOMY',
    positive: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
    negative: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
  {
    id: 4,
    title: 'POLITIC',
    positive: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
    negative: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.',
  },
]

export default function ViewStep({ data, candidate, oneCandidate }: { data: any, candidate: any, oneCandidate: any }) {
  const [isData, setData] = useState(data)
  const [listCandidate, setListCandidate] = useState(candidate)
  const [isCandidate, setCandidate] = useState(oneCandidate?.id)
  const [isNameCan, setNameCan] = useState(oneCandidate?.name.toUpperCase())
  const [isImgCan, setImgCan] = useState(`/img/candidate/${oneCandidate?.img}`)


  async function chooseCandidate(value: any) {
    setData([])
    setCandidate((value == null) ? oneCandidate?.id : value)
    const dataDB = await funGetStepFront({ candidate: value })
    const dataCan = await funGetOneCandidateFront({ candidate: value })
    setData(dataDB)
    setNameCan((dataCan?.name.toUpperCase()))
    setImgCan(`/img/candidate/${dataCan?.img}`)
  }

  return (
    <>
      {/* <PageSubTitle text1='STEP' text2='ASSESSMENT' /> */}
      <PageSubTitle text1='PENILAIAN' text2='STEP' />
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
            {!_.isEmpty(isData) ? (
              <>
                {
                  _.keys(isData).map((v, i) => (
                    <Box key={i} pb={20}>
                      <Text fw={"bold"} c={"white"} fz={25} >{_.upperCase(v)}</Text>
                      <Grid>
                        <Grid.Col span={{ md: 6, lg: 6 }}>
                          <Box
                            style={{
                              background: "rgba(0,0,0,0.3)",
                              padding: 10,
                              borderRadius: 10
                            }}
                          >
                            <Box pb={10}>
                              <Text fw={"bold"} c={"green"}>POSITIF</Text>
                            </Box>
                            {(() => {
                              const datanya = _.groupBy(
                                isData[v],
                                (v3) => v3.sentiment
                              )["1"];

                              if (!datanya) return <></>;
                              return (
                                <>
                                  <ScrollArea h={200}>
                                    <Stack pl={10}>
                                      <Text c={"white"} fz={14}>
                                        <TextAnimation
                                          phrases={[...datanya[_.random(0, datanya.length - 1)].content.split('\n')]}
                                          typingSpeed={0}
                                          backspaceDelay={0}
                                          eraseDelay={0}
                                          timeComplete={0}
                                          errorProbability={0}
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
                        </Grid.Col>
                        <Grid.Col span={{ md: 6, lg: 6 }}>
                          <Box
                            style={{
                              background: "rgba(0,0,0,0.3)",
                              padding: 10,
                              borderRadius: 10
                            }}
                          >
                            <Box pb={10}>
                              <Text fw={"bold"} c={"red"}>NEGATIF</Text>
                            </Box>
                            {(() => {
                              const datanya = _.groupBy(
                                isData[v],
                                (v3) => v3.sentiment
                              )["2"];

                              if (!datanya) return <></>;
                              return (
                                <>
                                  <ScrollArea h={200}>
                                    <Stack pl={10}>
                                      <Text c={"white"} fz={14}>
                                        <TextAnimation
                                          phrases={[...datanya[_.random(0, datanya.length - 1)].content.split('\n')]}
                                          typingSpeed={0}
                                          backspaceDelay={0}
                                          eraseDelay={0}
                                          timeComplete={0}
                                          errorProbability={0}
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
                        </Grid.Col>
                      </Grid>
                    </Box>
                  ))
                }
              </>
            )
              : (
                <Text c={"white"}></Text>
              )}
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </>
  );
}
