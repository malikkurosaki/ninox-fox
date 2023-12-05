"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { Box, Button, Center, Divider, Grid, Group, Image, Select, SimpleGrid, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import EchartPairingSentiment from '../components/echart_pairing_sentiment';

export default function ViewPairingFront() {
  return (
    <>
      <PageSubTitle text1='REGIONAL' text2='DATA PAIRING' />
      <Stack pt={20}>
        <Grid gutter={30}>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <Box
              style={{
                background: "rgba(0,0,0,0.3)",
                padding: 10,
                borderRadius: 10
              }}
            >
              <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <Center>
                  <Box p={10}>
                    <Image src={"/candidate/candidate.png"} alt='canidate' maw={200} mx="auto" />
                    <Text fw={"bold"} ta={"center"} c={"white"}>I WAYAN COSTER</Text>
                  </Box>
                </Center>
                <Box p={20}>
                  <Image src={"/candidate/candidate.png"} alt='canidate' maw={200} mx="auto" />
                  <Text fw={"bold"} ta={"center"} c={"white"}>WAKIL I WAYAN COSTER</Text>
                </Box>
              </SimpleGrid>
            </Box>
            <Group>
              
            </Group>
            <TextInput mt={20} placeholder='Search' />
            <Select
            mt={10}
              placeholder="Candidate"
              data={['I Wayan Koster', 'I Kadek Adi', 'I Wayan Marta']}
            />
            <Button fullWidth mt={20} c={"dark"} bg={"white"}>GENERATE</Button>

            <Box pt={45}>
              <Text ta={"center"} fz={20} c={"white"}>SUCCESS PROBABILITY PROJECTION</Text>
            </Box>
            <Box pt={10}>
              <Text ta={"center"} fz={60} fw={"bold"} c={"green"}>64.89 %</Text>
            </Box>

          </Grid.Col>
          <Grid.Col span={{ md: 7, lg: 7 }}>

            <EchartPairingSentiment />
          </Grid.Col>
        </Grid>

      </Stack>

    </>
  );
}