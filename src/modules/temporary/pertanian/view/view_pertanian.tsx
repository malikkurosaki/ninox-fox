"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartJenisPrasaranaTransportasi from '../components/echart_jenis_prasarana_transportasi';
import EchartJalanBermotorRoda4 from '../components/echart_jalan_bermotor_roda_4';
import EchartPenggunaanSungai from '../components/echart_penggunaan_sungai';

export default function ViewPertanian() {
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
        <Box>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              INFRASTRUKTUR PERTANIAN MENURUT KAB/KOTA
            </Text>
          </Box>
        </Box>
        <Box pt={10}>
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
            <EchartJenisPrasaranaTransportasi />
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
            <EchartJalanBermotorRoda4 />
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
            <EchartPenggunaanSungai />
          </Box>
        </SimpleGrid>
      </Box>
        </Box>
    </>
  );
}

