"use client"
import { PageSubTitle } from '@/modules/_global';
import { funGetOneCandidateFront } from '@/modules/candidate';
import { Box, Button, Divider, Group, Image, Indicator, Menu, MenuTarget, ScrollArea, Select, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextAnimation from 'react-typing-dynamics';
import { funGetMlAiFront } from '../..';
import _ from 'lodash';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import moment from 'moment';

const dataMl = [
  {
    id: 1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam., quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. ',
  },
]

export default function ViewMlAi({ data, candidate, oneCandidate }: { data: any, candidate: any, oneCandidate: any }) {
  const [isData, setData] = useState(data)
  const [listCandidate, setListCandidate] = useState(candidate)
  const [isCandidate, setCandidate] = useState(oneCandidate?.id)
  const [isNameCan, setNameCan] = useState(oneCandidate?.name.toUpperCase())
  const [isImgCan, setImgCan] = useState(`/img/candidate/${oneCandidate?.img}`)
  const randomInt = ['02-03-2024', '08-03-2024', '17-03-2024', '28-03-2024']


  async function chooseCandidate(value: any) {
    setData([])
    setCandidate((value == null) ? oneCandidate?.id : value)
    const dataDB = await funGetMlAiFront({ candidate: value })
    const dataCan = await funGetOneCandidateFront({ candidate: value })
    setData(dataDB)
    setNameCan((dataCan?.name.toUpperCase()))
    setImgCan(`/img/candidate/${dataCan?.img}`)
  }
  const dayRenderer: DatePickerProps['renderDay'] = (date) => {
    
    const coba = moment(date).format('DD-MM-YYYY')
    const day = date.getDate()
    const muncul = randomInt.includes(coba)
    return (
      <Indicator size={6} radius="xs" label={<Divider my="md" />} position="bottom-center" color="green" offset={-2} disabled={!muncul}>
        <div>{day}</div>
      </Indicator>
    );
  };


  function displayDates(array: Date[]): string {
    const dateStrings = array.map((d) => d.toISOString().split('T')[0]);

    return dateStrings.join(' ');
  }

  return (
    <>
      {/* <PageSubTitle text1='ML-AI' text2='PROMPT RECOMENDATIONS' /> */}
      <PageSubTitle text1='REKOMENDASI CEPAT' text2='ML-AI' />
      <Stack pt={20}>
        <Box
        >
          <Image src={isImgCan} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='Kandidat' maw={200} mx="auto" />
          <Text fw={"bold"} ta={"center"} c={"white"}>{isNameCan}</Text>
        </Box>

        <Box pt={20}>
          <Box
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: 30,
              borderRadius: 10
            }}
          >
            <Group justify='space-between'>
              <Text c={"green"} fz={20} fw={"bold"}>PENINGKATAN ANALISIS KEKUATAN</Text>
              <Group mt={10}>
                <Menu position="left-start">
                  <Menu.Target>
                    <Button
                      variant="outline"
                      style={{
                        backgroundColor: 'white'
                      }}
                    >
                      <Text c={'#000000'}>Date</Text>
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown p={20}>
                    <DatePicker renderDay={dayRenderer} />
                    <Group justify="space-between" mt={5} >
                      <Button
                        w={100}
                        p={10}
                        variant="outline"
                        style={{
                          backgroundColor: 'white'
                        }}
                      >
                        BATAL
                      </Button>
                      <Button
                        w={100}
                        variant="filled"
                      >
                        OK
                      </Button>
                    </Group>
                  </Menu.Dropdown>
                </Menu>
                <Select

                  placeholder="Kandidat"
                  data={listCandidate.map((can: any) => ({
                    value: String(can.id),
                    label: can.name
                  }))}
                  value={isCandidate}
                  onChange={(val) => chooseCandidate(val)}
                />

              </Group>
            </Group>
            <Box pt={20}>
              <ScrollArea h={"34vh"}>
                <Stack >
                  {
                    isData && isData.length > 0 && (
                      <Text c={"white"} fz={14}>
                        <TextAnimation
                          phrases={[...isData[_.random(0, isData.length - 1)].content.split('\n')]}
                          typingSpeed={0}
                          backspaceDelay={0}
                          eraseDelay={0}
                          timeComplete={0}
                          errorProbability={0}
                          eraseOnComplete={false}
                          isSecure={false}
                        />
                      </Text>
                    )
                  }
                </Stack>

              </ScrollArea>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

