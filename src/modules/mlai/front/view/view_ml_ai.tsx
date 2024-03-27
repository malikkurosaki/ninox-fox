"use client"
import { PageSubTitle } from '@/modules/_global';
import { funGetOneCandidateFront } from '@/modules/candidate';
import { ActionIcon, Box, Button, Container, Divider, Group, Image, Indicator, Menu, MenuTarget, ScrollArea, Select, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextAnimation from 'react-typing-dynamics';
import { funGetMlAiFront } from '../..';
import _ from 'lodash';
import { DateInput, DatePicker, DatePickerProps } from '@mantine/dates';
import moment from 'moment';
import { CiMenuKebab } from 'react-icons/ci';

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
  const [value, setValue] = useState<Date | null>(null);

  return (
    <>
      {/* <PageSubTitle text1='ML-AI' text2='PROMPT RECOMENDATIONS' /> */}
      <PageSubTitle text1='REKOMENDASI CEPAT' text2='ML-AI' />
      <Box pt={20}>
        <Box
        >
          <Image src={isImgCan} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='Kandidat' maw={200} mx="auto" />
          <Container px={0} size="15rem" mt={20}>
            <Select

              placeholder="Kandidat"
              data={listCandidate.map((can: any) => ({
                value: String(can.id),
                label: can.name
              }))}
              value={isCandidate}
              onChange={(val) => chooseCandidate(val)}
            />
          </Container>
          {/* <Text fw={"bold"} ta={"center"} c={"white"}>{isNameCan}</Text> */}
        </Box>
        <Text mt={20} c={"green"} fz={20} fw={"bold"}>PENINGKATAN ANALISIS KEKUATAN</Text>
        <Box pt={20}>
          <Box
            style={{
              background: "rgba(0,0,0,0.3)",
              padding: 30,
              borderRadius: 10
            }}
          >
            <Box>
              <Box>
                <Group >
                  <DateInput
                    variant="filled"
                    placeholder="SELECT DATE"
                    maxDate={new Date()}
                    minDate={new Date('2023-09-01')}
                    value={value}
                    onChange={setValue}
                    renderDay={dayRenderer}
                  />
                  <Button color="indigo" w={100}>08.33</Button>
                  <Button color="indigo" w={100}>10.00</Button>
                  <Button color="indigo" w={100}>13.10</Button>
                  <Button color="indigo" w={100}>15.40</Button>
                  <Button color="indigo" w={100}>20.20</Button>
                  <Group>
                    <Menu shadow="md" width={200} position="right-start">
                      <Menu.Target>
                        <ActionIcon variant="subtle" color="rgba(255, 255, 255, 1)" aria-label="Settings">
                          <CiMenuKebab style={{ width: '70%', height: '70%' }} />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown pb={0}>
                        <Button color="indigo" mb={5} fullWidth>13.10</Button>
                        <Button color="indigo" mb={5} fullWidth>15.40</Button>
                        <Button color="indigo" mb={5} fullWidth>20.20</Button>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Group>
              </Box>
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
      </Box>
    </>
  );
}

