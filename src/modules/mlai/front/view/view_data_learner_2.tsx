"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Button, Divider, Group, rem, ScrollArea, SimpleGrid, Spoiler, Text } from '@mantine/core';
import React, { useState } from 'react';
import { GiBackwardTime } from "react-icons/gi";
import _ from "lodash"
import { useElementSize } from '@mantine/hooks';
import TextAnimation from 'react-typing-dynamics';

const dataLog = [
  {
    id: 1,
    log: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    req: 'Pending',
    tgl: '21 Mei 2024',
    color: "#CE9E23",
  },
  {
    id: 2,
    log: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    req: 'Sukses',
    tgl: '11 Mei 2024',
    color: "#2CCC1E",
  },
  {
    id: 3,
    log: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    req: 'Sukses',
    tgl: '09 Mei 2024',
    color: "#2CCC1E",
  },
  {
    id: 4,
    log: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    req: 'Pending',
    tgl: '10 Mei 2024',
    color: "#CE9E23",
  },
  {
    id: 5,
    log: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    req: 'Sukses',
    tgl: '20 Mei 2024',
    color: "#2CCC1E",
  },

]

export default function ViewDataLearner2() {
  const { ref, width, height } = useElementSize();
  const [data, setData] = useState(false)

  function onProses() {
    setData(true)
  }

  return (
    <>
      <PageSubTitle text1='REKOMENDASI CEPAT' text2='DATA LEARNER' />
      <Box pt={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box>
            <Box style={{
              background: "rgba(0,0,0,0.3)",
              padding: 20,
              borderRadius: 10,

            }}>
              <Text c={'white'} mb={20} fz={18}>REQUEST</Text>
              <textarea
                ref={ref}
                style={{
                  width: '100%', height: '63vh', borderRadius: 5, backgroundColor: '#12002A', color: '#ffffff', border: 'none', outline: 'none'
                }}
                placeholder="Input apa yang kamu inginkan........"
              />
            </Box>
            <Button mt={20} fullWidth radius={10} onClick={onProses} color="indigo">KIRIM</Button>
          </Box>
          <Box>

            <Box>
              <Box style={{
                background: "rgba(0,0,0,0.3)",
                padding: 20,
                borderRadius: 10,
                height: '20vh'
              }}>
                <Text c={'white'} mb={20} fz={18}>RESPONS</Text>
                {data && (
                  <Text c={'#CE9E23'}>
                    <TextAnimation
                      phrases={['Terima kasih telah melalkukan request, respons akan diberikan secepatnya']}
                      typingSpeed={0}
                      backspaceDelay={0}
                      eraseDelay={0}
                      timeComplete={0}
                      errorProbability={0}
                      eraseOnComplete={false}
                      isSecure={false}
                    />
                  </Text>
                )}
              </Box>
            </Box>
            <Box mt={20}>
              <Box style={{
                background: "rgba(0,0,0,0.3)",
                padding: 20,
                borderRadius: 10,
                height: '60vh'
              }}>
                <Text c={'white'} mb={20} fz={18}>LOG REQUEST</Text>
                <ScrollArea h={'50vh'}>

                  {dataLog.map((v, i) => {
                    return (
                      <Box style={{
                        cursor: "pointer"
                      }} key={i}>
                        <Spoiler maxHeight={30} showLabel="Show more" hideLabel="Hide">

                          <Text c={v.color}>{v.log} </Text>
                        </Spoiler>
                        <Group justify='space-between' style={{
                          alignItems: "center",
                          alignContent: "center"
                        }}>
                          <Text c={'#D0CFCF'} fz={13}>{v.tgl}</Text>
                          <Group gap={5} mt={10} style={{
                            alignItems: "center",
                            alignContent: "center"
                          }}>
                            <GiBackwardTime size={25} color={v.color} />
                            <Text c={v.color} fz={13}>{v.req}</Text>
                          </Group>
                        </Group>
                        <Divider my="md" color={'#6E6C68'} />
                      </Box>
                    )
                  })}
                </ScrollArea>
              </Box>
            </Box>
          </Box>


        </SimpleGrid>
      </Box>
    </>
  );
}
