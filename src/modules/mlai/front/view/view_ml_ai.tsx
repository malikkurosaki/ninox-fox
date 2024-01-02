"use client"
import { PageSubTitle } from '@/modules/_global';
import { funGetOneCandidateFront } from '@/modules/candidate';
import { Box, Group, Image, ScrollArea, Select, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextAnimation from 'react-typing-dynamics';
import { funGetMlAiFront } from '../..';

const dataMl = [
  {
    id: 1,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam., quaerat, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod, quaerat, quibusdam. ',
  },
]

export default function ViewMlAi({ data, candidate, oneCandidate }: { data: any, candidate: any, oneCandidate: any }) {
  const [isData, setData] = useState(data)
  const [isCandidate, setCandidate] = useState(candidate)
  const [isNameCan, setNameCan] = useState(oneCandidate.name.toUpperCase())
  const [isImgCan, setImgCan] = useState(`/candidate/${oneCandidate.img}`)

  async function chooseCandidate(value: any) {
    const dataDB = await funGetMlAiFront({candidate: value })
    const dataCan = await funGetOneCandidateFront({candidate: value})
    setData(dataDB)
    setNameCan((dataCan?.name.toUpperCase()))
    setImgCan(`/candidate/${dataCan?.img}`)
  }
  return (
    <>
      <PageSubTitle text1='ML-AI' text2='PROMPT RECOMENDATIONS' />
      {/* <Stack c={"white"}>
        <pre>
          {JSON.stringify(isData, null, 1)}
        </pre>
      </Stack> */}
      <Stack pt={20}>
        <Box
        >
          <Image src={isImgCan} bg={"white"} style={{border: "4px solid white"}} radius={"100%"} alt='canidate' maw={200} mx="auto" />
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
              <Text c={"green"} fz={20} fw={"bold"}>SOCSTRENGTH ANALYSIS IMPROVEMENTIAL</Text>
              <Select
                mt={10}
                placeholder="Candidate"
                data={isCandidate.map((can: any) => ({
                  value: String(can.id),
                  label: can.name
                }))}
                onChange={(val) => chooseCandidate(val)}
              />
            </Group>
            <Box pt={20}>
              <ScrollArea h={"34vh"}>
                {/* {isData.map((item) => {
                  return (
                    <Stack key={item.id}>
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
                  )
                })} */}
                    <Stack >
                      <Text c={"white"} fz={14}>
                        {...isData.content.split('\n')}
                        {/* <TextAnimation
                          phrases={[...isData.content.split('\n')]}
                          typingSpeed={0}
                          backspaceDelay={0}
                          eraseDelay={0}
                          timeComplete={0}
                          errorProbability={0}
                          eraseOnComplete={false}
                          isSecure={false}
                        /> */}
                      </Text>
                    </Stack>

              </ScrollArea>
            </Box>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

