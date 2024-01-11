"use client"
import { Box, Button, Center, Divider, Grid, Group, Image, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import EchartPairingSentiment from '../components/echart_pairing_sentiment';
import { PageSubTitle } from '@/modules/_global';

export default function ViewPairingFront() {
  return (
    <>
      <PageSubTitle text1='REGIONAL' text2='DATA PAIRING' />
      <Box
              style={{
                // backgroundColor: WARNA.ungu,
                position: "sticky",
                top: 0,
                zIndex: 99,
                // padding: 10,
                paddingBottom: 10
              }}
      >
        <Group justify='flex-end'
        >
          <TextInput w={300} mt={20} placeholder='Search' />
        </Group>
      </Box>
      <Stack pt={20}>
        <Grid gutter={30}>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <Box
            >
              <Box
                style={{
                  background: "rgba(0,0,0,0.3)",
                  padding: 10,
                  borderRadius: 10
                }}
              >
                <SimpleGrid
                  cols={{ sm: 2, lg: 2 }}
                  spacing={{ base: 10, sm: 'xl' }}
                  verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                  <Center>
                    <Box p={10}>
                      <Image src={"/candidate/candidate.png"} alt='canidate' maw={200} mx="auto" />
                      <Text fw={"bold"} ta={"center"} c={"white"}>I WAYAN COSTER</Text>
                    </Box>
                  </Center>
                  <Box p={10}>
                    <Image src={"/candidate/candidate2-round.png"} alt='canidate' maw={200} mx="auto" />
                    <Text fw={"bold"} ta={"center"} c={"white"}>I NYOMAN GIRI</Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <Group>

              </Group>
              <Select
                mt={20}
                placeholder="Candidate 1"
                data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
              />
              <Select
                mt={10}
                placeholder="Candidate 2"
                data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
              />
              <Button fullWidth mt={20} c={"dark"} bg={"white"}>GENERATE</Button>

              <Box pt={20}>
                <Text ta={"center"} fz={20} c={"white"}>SUCCESS PROBABILITY PROJECTION</Text>
              </Box>
              <Box pt={10}>
                <Text ta={"center"} fz={70} fw={"bold"} c={"green"}>64.89 %</Text>
              </Box>
            </Box>

          </Grid.Col>
          <Grid.Col span={{ md: 7, lg: 7 }}>

            <ScrollArea h={"74vh"}>
              <EchartPairingSentiment />
            </ScrollArea>
          </Grid.Col>
        </Grid>

      </Stack>

    </>
  );
}
