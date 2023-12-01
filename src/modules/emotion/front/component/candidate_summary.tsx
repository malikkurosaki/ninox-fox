import { WARNA } from '@/modules/_global/fun/WARNA';
import { Box, Image, Stack, Text } from '@mantine/core';
import React from 'react';

export default function CandidateSummary() {
  return (
    <>
      <Box>
        <Box 
        style={{
          background: "rgba(0,0,0,0.3)",
          padding: 10,
          borderRadius: 10
        }}
        >
          <Image src={"/candidate/candidate.png"} alt='canidate' maw={200} mx="auto" />
          <Box p={10}>
            <Text fw={"bold"} ta={"center"} c={"white"}>I WAYAN COSTER</Text>
          </Box>
        </Box>
        <Box pt={20}>
          <Box style={{
            backgroundColor: WARNA.hijau,
            border: "1px solid #ffff",
            padding: 5,
            borderRadius: 5
          }}>
            <Text ml={5} fz={13} c={"white"}>POSITIVE</Text>
            <Text ta={'center'} fw={'bold'} c={"white"} fz={24}>57.76%</Text>
          </Box>
        </Box>
        <Box pt={20}>
          <Box style={{
            backgroundColor: "white",
            border: "1px solid #ffff",
            padding: 5,
            borderRadius: 5
          }}>
            <Text ml={5} fz={13} c={WARNA.hijau}>NEUTRAL</Text>
            <Text ta={'center'} fw={'bold'} c={WARNA.hijau} fz={24}>57.76%</Text>
          </Box>
        </Box>
        <Box pt={20}>
          <Box style={{
            backgroundColor: WARNA.merah,
            border: "1px solid #ffff",
            padding: 5,
            borderRadius: 5
          }}>
            <Text ml={5} fz={13} c={"white"}>NEGATIVE</Text>
            <Text ta={'center'} fw={'bold'} c={"white"} fz={24}>57.76%</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
