"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Button, Divider, Group, rem, ScrollArea, SimpleGrid, Spoiler, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { GiBackwardTime } from "react-icons/gi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import _ from "lodash"
import { useElementSize } from '@mantine/hooks';
import TextAnimation from 'react-typing-dynamics';
import funAddRequestMlAiFront from '../fun/add_request_mlai';
import funGetLogRequestMlaiFront from '../fun/get_log_request_mlai_front';
import moment from 'moment';
import { useRouter } from 'next/navigation';
// import { ScrollLoader } from 'next-scroll-loader';
import CobaScroll from '../component/coba_scroll';
import { RESPONSE_MLAI } from '../val/val_respon_mlai';
import { ScrollLoaderExternalState } from 'next-scroll-loader';

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
  const router = useRouter()
  const { ref, width, height } = useElementSize()
  const [response, setResponse] = useState('')
  const [request, setRequest] = useState('')
  const [dataLog, setDataLog] = useState(log)
  const [data, setData] = useState(log);
  const [isLoad, setLoad] = useState(false)
  const [page, setPage] = useState()

  const [listLogRequest, setListLogRequest] = useState<any[]>([])
  const [scrollPage, setScrollPage] = useState(1)

  async function onProses({ page }: { page: any }) {
    setResponse('')
    if (request == '' || request == null || request == undefined) {
      return setResponse('Silahkan isi form request')
    }

    const ins = await funAddRequestMlAiFront({ request: request })
    if (ins.success === true) {
      setRequest('')
      await new Promise((r) =>
        setTimeout(r, 500)
      )
      setResponse(RESPONSE_MLAI[Math.floor(Math.random() * 5)])
      // const load = await funGetLogRequestMlaiFront({ page: page })
      const load = await funGetLogRequestMlaiFront()
      setListLogRequest(load)
      setDataLog(load)
      setData(load)
      setLoad(!isLoad)
    } else {
      setResponse('Error, silakan coba lagi nanti')
    }
  }


  return (
    <>
      <PageSubTitle text1='DATA' text2='LEARNER' />
      <Box pt={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: 20 }}
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
            <Button mt={20} fullWidth radius={10} onClick={() => {
              onProses({ page: scrollPage })
            }} color="indigo">KIRIM</Button>
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
                <CobaScroll isload={isLoad} datalist={listLogRequest} />
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

