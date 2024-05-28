"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Button, Divider, Group, rem, ScrollArea, SimpleGrid, Spoiler, Text } from '@mantine/core';
import React, { useState } from 'react';
import { GiBackwardTime } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import _ from "lodash"
import { useElementSize } from '@mantine/hooks';
import TextAnimation from 'react-typing-dynamics';
import funAddRequestMlAiFront from '../fun/add_request_mlai';
import funGetLogRequestMlaiFront from '../fun/get_log_request_mlai_front';
import moment from 'moment';

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

export default function ViewDataLearner2({ log }: { log: any }) {
  const { ref, width, height } = useElementSize()
  const [response, setResponse] = useState('')
  const [request, setRequest] = useState('')
  const [dataLog, setDataLog] = useState(log)

  async function onProses() {
    setResponse('')
    if (request == '' || request == null || request == undefined) {
      return setResponse('Silahkan isi form request')
    }

    const ins = await funAddRequestMlAiFront({ request: request })
    if (ins.success === true) {
      setRequest('')
      setResponse('Terima kasih telah melakukan request, respons akan diberikan secepatnya')
      const load = await funGetLogRequestMlaiFront()
      setDataLog(load)
    } else {
      setResponse('Error, silakan coba lagi nanti')
    }
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
                  width: '100%', height: '63vh', borderRadius: 5, backgroundColor: '#12002A', color: '#ffffff', border: 'none', outline: 'none', resize: 'none'
                }}
                value={request}
                placeholder="Input apa yang kamu inginkan........"
                onChange={(val) => setRequest(val.currentTarget.value)}
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
                {response && (
                  <Text c={'#CE9E23'}>
                    <TextAnimation
                      phrases={[response]}
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

                  {dataLog.map((v: any, i: any) => {
                    return (
                      <Box style={{
                        cursor: "pointer"
                      }} key={i}>
                        <Spoiler maxHeight={30} showLabel="Show more" hideLabel="Hide">

                          <Text c={v.status == 0 ? '#CE9E23' : '#2CCC1E'}>{v.request} </Text>
                        </Spoiler>
                        <Group justify='space-between' style={{
                          alignItems: "center",
                          alignContent: "center"
                        }}>
                          <Text c={'#D0CFCF'} fz={13}>{moment(v.createdAt).format('LLL')}</Text>
                          <Group gap={5} mt={10} style={{
                            alignItems: "center",
                            alignContent: "center"
                          }}>
                            {
                              v.status == 0
                                ? <GiBackwardTime size={25} color={'#CE9E23'} />
                                : <IoIosCheckmarkCircleOutline size={25} color={'#2CCC1E'} />
                            }

                            <Text c={v.status == 0 ? '#CE9E23' : '#2CCC1E'} fz={13}>{v.status == 0 ? 'Pending' : 'Terjawab'}</Text>
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
