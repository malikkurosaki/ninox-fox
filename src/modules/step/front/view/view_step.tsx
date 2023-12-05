"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { Box, Flex, Grid, Image, ScrollArea, Select, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import TextAnimation from 'react-typing-dynamics';

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

export default function ViewStep() {
  return (
    <>
      <PageSubTitle text1='STEP' text2='ASSESSMENT' />
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
                <Image src={"/candidate/candidate.png"} alt='canidate' maw={200} mx="auto" />
                <Text fw={"bold"} ta={"center"} c={"white"}>I WAYAN COSTER</Text>
              </Box>
              <Select
                mt={10}
                placeholder="Candidate"
                data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
              />
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ md: 9, lg: 9 }}>
          <ScrollArea h={"100vh"}>
            {dataStep.map((item) => {
              return (
                <Box key={item.id} pb={20}>
                  <Text fw={"bold"} c={"white"} fz={25} >{item.title}</Text>
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
                          <Text fw={"bold"} c={"green"}>POSITIVE</Text>
                        </Box>
                        <ScrollArea h={200}>
                          <Stack pl={10}>
                            <Text c={"white"} fz={14}>
                              <TextAnimation
                                phrases={[...item.positive.split('\n')]}
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
                          <Text fw={"bold"} c={"red"}>NEGATIVE</Text>
                        </Box>
                        <ScrollArea h={200}>
                          <Stack pl={10}>
                            <Text c={"white"} fz={14}>
                              <TextAnimation
                                phrases={[...item.negative.split('\n')]}
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
                      </Box>
                    </Grid.Col>
                  </Grid>
                </Box>
              )
            })}
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </>
  );
}
