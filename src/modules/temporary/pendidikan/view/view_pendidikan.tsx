"use client"
import React from 'react';
import { Box, Grid, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import { PageSubTitle } from '@/modules/_global';
import EchartJarakPendidikan from '../components/echart_jarak_pendidikan';
import EchartFasilitasDalamDesa from '../components/echart_fasilitas_dalam_desa';
import EchartKetersediaanTransportasiSmp from '../components/echart_ketersediaan_transportasi_smp';
import EchartKetersediaanTransportasiSma from '../components/echart_ketersediaan_transportasi_sma';
import EchartKetersediaanTransportasiSmk from '../components/echart_ketersediaan_transportasi_smk';
import TableDataGuruTersertifikasi from '../components/table_data_guru_tersertifikasi';
import TableDataGuruHonorer from '../components/table_data_guru_honorer';


export default function ViewPendidikan() {
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='PENDIDIKAN' />
      </Stack>
      {/* <Box
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
      </Box> */}
      <Box pt={30}>
        <Box>
          <Box pb={20}>
            <Text c={"white"} fw={'bold'} fz={20}>
              RATA-RATA JARAK KE FASILITAS PENDIDIKAN KOTA DENPASAR
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
            <EchartJarakPendidikan />
          </Box>
        </SimpleGrid>
        <Box pt={40}>
          <Box>
            <Box pb={10}>
              <Text c={"white"} fw={'bold'} fz={20}>
                KETERSEDIAAN TRANSPORTASI MENJANGKAU FASILITAS PENDIDIKAN KOTA DENPASAR
              </Text>
            </Box>
          </Box>
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
              <EchartFasilitasDalamDesa />
            </Box>
            {/* <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSmp />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSma />
            </Box>
            <Box
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 10,
                padding: 20
              }}
            >
              <EchartKetersediaanTransportasiSmk />
            </Box> */}
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <TableDataGuruTersertifikasi />
        </Box>
        <Box pt={40}>
          <TableDataGuruHonorer />
        </Box>
      </Box>
    </>
  );
}
