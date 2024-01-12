"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartRumahIbadah from '../components/echart_rumah_ibadah';

export default function ViewKeagamaan() {
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KEAGAMAAN' />
      </Stack>
      <Box pt={20}>
        <Group justify='flex-end'>
          <Select radius={"md"} placeholder='Provinsi' />
          <Select radius={"md"} placeholder='Kabupaten/Kota' />
          <Select radius={"md"} placeholder='Kecamatan' />
        </Group>
      </Box>
      <Box pt={40}>
        <Box>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH RUMAH IBADAH MENURUT KAB/KOTA
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
            <EchartRumahIbadah/>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

