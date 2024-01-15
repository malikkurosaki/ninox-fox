'use client'
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import ChartBangunanSemiPermanen from '../components/chart_bangunan_semi_permanen';
import ChartTanpaBangunanTerdekat from '../components/chart_tanpa_bangunan_terdekat';
import ChartLembagaKeuangan from '../components/chart_lembaga_keuangan';
import { ChartBangunanPermanen } from '../..';
import EchartPublicConcerns from '@/modules/regional_insights/components/echart_public_concerns';

export default function ViewEkonomi() {
  if(typeof window !== 'undefined')
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='EKONOMI' />
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
        <Box
        >
          <Box pb={20}>
            <Text c={"white"} fw={'bold'} fz={20}>
              {/* KEMUDAHAN MENGAKSES PASAR BERDASARKAN JENIS BANGUNAN MENURUT KAB/KOTA */}
              JUMLAH PASAR BERDASARKAN JENIS BANGUNAN MENURUT KECAMATAN
            </Text>
          </Box>
          {/* <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
          >
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <ChartBangunanPermanen/>
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <ChartBangunanSemiPermanen/>
            </Box>
          </SimpleGrid> */}
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
                <ChartTanpaBangunanTerdekat/>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Box pt={40}>
        <Box>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              KETERSEDIAAN LEMBAGA KEUANGAN MENURUT KECAMATAN
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
            <ChartLembagaKeuangan/>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
