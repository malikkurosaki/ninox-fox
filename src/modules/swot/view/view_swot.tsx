"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { Box, Flex, Grid, Image, ScrollArea, Select, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import TextAnimation from 'react-typing-dynamics';

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

export default function ViewSwot() {
  return (
    <>
      <PageSubTitle text1='SWOT' text2='EVALUATION' />
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
          <ScrollArea h={"85vh"}>
            {dataSwot.map((item) => {
              return (
                <Box key={item.id} pb={20}>
                  <Grid>
                    <Grid.Col span={{ md: 12, lg: 12 }}>
                      <Box
                        style={{
                          background: "rgba(0,0,0,0.3)",
                          padding: 10,
                          borderRadius: 10
                        }}
                      >
                        <Box pb={10}>
                          <Text fw={"bold"} c={"green"}>{item.title}</Text>
                        </Box>
                        <ScrollArea h={150}>
                          <Stack pl={10}>
                            <Text c={"white"} fz={14}>
                              <TextAnimation
                                phrases={[...item.desc.split('\n')]}
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
