"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartPresentaseKemiskinan from '../components/echart_presentase_kemiskinan';
import EchartPesertaBpjs from '../components/echart_peserta_bpjs';

export default function ViewKemiskinanDanKetimpangan() {
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='INFRASTRUKTUR PERTANIAN' />
      </Stack>
      <Box
        style={{
          backgroundColor: "#05363D",
          position: "sticky",
          top: 0,
          zIndex: 99,
          paddingTop: 10,
          paddingBottom: 10
        }}
      >
        <Group justify='flex-end' pt={10} >
          <Select radius={"md"} placeholder='Provinsi' />
          <Select radius={"md"} placeholder='Kabupaten/Kota' />
          <Select radius={"md"} placeholder='Kecamatan' />
        </Group>
      </Box>
      <Box pt={30}>
        <SimpleGrid
          cols={{ base: 1, sm: 1, lg: 1 }}
        >
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartPresentaseKemiskinan/>
          </Box>
        </SimpleGrid>
      </Box>
      <Box pt={15}>
        <SimpleGrid
          cols={{ base: 1, sm: 1, lg: 1 }}
        >
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartPesertaBpjs/>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

