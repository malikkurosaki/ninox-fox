"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { BackgroundImage, Box, Center, Flex, Grid, Group, Image, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';
import CandidateSummary from '../component/candidate_summary';
import TableTop10 from '../component/table_top_10';
import EchartCandidateSummary from '../component/echart_candidate_summary';
import TopPairingCandidate from '../component/top_pairing_candidate';

export default function ViewSummary() {
  return (
    <>
      <PageSubTitle text1='EMOTIONAL' text2='SPECTRUM CHART' />
      <Stack pt={20}>
        {/* <SimpleGrid
          cols={{ base: 1, sm: 3, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box>
            <CandidateSummary />
          </Box>
          <Center
          >
            <Image src={"/bgEmotion1.png"} alt='bg' h={"45vh"}
              w="auto" />
          </Center>
          <Box>
            <EchartCandidateSummary />
          </Box>
        </SimpleGrid> */}

        <Grid gutter={40}>
          <Grid.Col span={{ base: 4, md: 4, lg: 4 }}>
            <CandidateSummary />
          </Grid.Col>
          <Grid.Col span={{ base: 3, md: 3, lg: 3 }}>
            <Center>
              <Image src={"/bgEmotion1.png"} alt='bg' h={"45vh"}
                w="auto" />
            </Center>
          </Grid.Col>
          <Grid.Col span={{ base: 5, md: 5, lg: 5 }}>
              <EchartCandidateSummary />
          </Grid.Col>
        </Grid>

        <Box pt={10}>
          <TableTop10 />
        </Box>
        <Box pt={30}>
          <TopPairingCandidate />
        </Box>
      </Stack>



    </>
  );
}
