"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { BackgroundImage, Box, Flex, Grid, Image, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';
import CandidateSummary from '../component/candidate_summary';
import TableTop10 from '../component/table_top_10';
import EchartCandidateSummary from '../component/echart_candidate_summary';

export default function ViewSummary() {
  return (
    <>
      {/* <Box style={{
      position: "fixed",
      opacity: 0.7,
      zIndex: 0,
      left: "25%",
      marginLeft: "10px"
    }}>
        <Image src={"/bgEmotion.png"} alt='bg'/>
    </Box> */}
      <PageSubTitle text1='EMOTIONAL' text2='SPECTRUM CHART' />
      <Stack pt={20}>
        <SimpleGrid
          cols={{ base: 1, sm: 3, lg: 3 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box>
            <CandidateSummary />
          </Box>
          <Box >
            <Image src={"/bgEmotion.png"} alt='bg' />
          </Box>
          <Box>
          <EchartCandidateSummary />
          </Box>
        </SimpleGrid>
        {/* <Grid grow gutter="xl">
          <Grid.Col span={{  md: 2, lg: 2 }}>
            <CandidateSummary />
          </Grid.Col>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <Box >
              <Image src={"/bgEmotion.png"} alt='bg' h={200}
                w="auto" />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ md: 5, lg: 5 }}>
            <EchartCandidateSummary />
          </Grid.Col>
        </Grid> */}

        <Box pt={20}>
          <TableTop10 />
        </Box>
      </Stack>



    </>
  );
}
