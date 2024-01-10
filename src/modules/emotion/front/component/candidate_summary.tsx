'use client'
import { WARNA } from '@/modules/_global';
import { Box, Image, SimpleGrid, Stack, Text } from '@mantine/core';
import _ from 'lodash';
import React, { useState } from 'react';

export default function CandidateSummary({ candidate, persen }: { candidate: any, persen: any }) {
  const [isNameCan, setNameCan] = useState(candidate?.name.toUpperCase())
  const [isImgCan, setImgCan] = useState(`/img/candidate/${candidate?.img}`)

  return (
    <>
      <Box>
        <Box
        // style={{
        //   background: "rgba(0,0,0,0.3)",
        //   padding: 10,
        //   borderRadius: 10,
        //   zIndex: 99999
        // }}
        >
          <Image src={isImgCan} bg={"white"} style={{ border: "4px solid white" }} radius={"100%"} alt='kandidat' maw={200} mx="auto" />
          <Box p={10}>
            <Text fw={"bold"} ta={"center"} c={"white"}>{isNameCan}</Text>
          </Box>
        </Box>
        <SimpleGrid
          cols={{ base: 1, sm: 3, lg: 3 }}
          spacing={{ base: 5, sm: 'xs' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >
          <Box pt={20}>
            <Box style={{
              backgroundColor: WARNA.hijau,
              border: "1px solid #ffff",
              padding: 5,
              borderRadius: 5
            }}>
              <Text ml={5} fz={13} c={"white"}>POSITIF</Text>
              <Text ta={'center'} fw={'bold'} c={"white"} fz={24}>{_.isNaN(persen.positive) ? 0 : persen.positive}%</Text>
            </Box>
          </Box>
          <Box pt={20}>
            <Box style={{
              backgroundColor: "white",
              border: "1px solid #ffff",
              padding: 5,
              borderRadius: 5
            }}>
              <Text ml={5} fz={13} c={WARNA.hijau}>NETRAL</Text>
              <Text ta={'center'} fw={'bold'} c={WARNA.hijau} fz={24}>{_.isNaN(persen.neutral) ? 0 : persen.neutral}%</Text>
            </Box>
          </Box>
          <Box pt={20}>
            <Box style={{
              backgroundColor: WARNA.merah,
              border: "1px solid #ffff",
              padding: 5,
              borderRadius: 5
            }}>
              <Text ml={5} fz={13} c={"white"}>NEGATIF</Text>
              <Text ta={'center'} fw={'bold'} c={"white"} fz={24}>{_.isNaN(persen.negative) ? 0 : persen.negative}%</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
