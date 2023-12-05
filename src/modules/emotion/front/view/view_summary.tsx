"use client"
import PageSubTitle from '@/modules/_global/front/components/PageSubtitle';
import { BackgroundImage, Box, Center, Flex, Grid, Image, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';
import CandidateSummary from '../component/candidate_summary';
import TableTop10 from '../component/table_top_10';
import EchartCandidateSummary from '../component/echart_candidate_summary';
import TopPairingCandidate from '../component/top_pairing_candidate';

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
          <Center
          >
            <Image src={"/bgEmotion1.png"} alt='bg' h={"45vh"}
              w="auto" />
          </Center>
          <Box>
            <EchartCandidateSummary />
          </Box>
        </SimpleGrid>

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
