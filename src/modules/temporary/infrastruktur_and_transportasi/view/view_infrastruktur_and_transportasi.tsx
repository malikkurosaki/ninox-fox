"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartJaminanKesehatan from '../components/echart_jenis_permukaan';
import EchartJenisPermukaan from '../components/echart_jenis_permukaan';
import EchartJalanDarat from '../components/echart_jalan_darat';
import EchartDataKecelakaan from '../components/echart_data_kecelakaan';

export default function ViewInfrastrukturAndTransportasi() {
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='INFRASTRUKTUR & TRANSPORTASI' />
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
          <Box pb={20}>
            <Text c={"white"} fw={'bold'} fz={20}>
              INFRASTRUKTUR DESA MENURUT KAB/KOTA
            </Text>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
          >
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartJenisPermukaan />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartJalanDarat />
            </Box>
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <Box>
            <Box pb={10}>
              <Text c={"white"} fw={'bold'} fz={20}>
                DATA ANGKA KECELAKAAN LALU LINTAS MENURUT KECAMATAN
              </Text>
            </Box>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 1 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartDataKecelakaan />
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

