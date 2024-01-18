"use client"
import { PageSubTitle } from '@/modules/_global';
import { Box, Group, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';
import EchartKelasIbuHamil from '../components/echart_kelas_ibu_hamil';
import EchartKelasIbuHamilKkMiskin from '../components/echart_kelas_ibu_hamil_kk_miskin';
import EchartAnakButaKkMiskin from '../components/echart_anak_buta_kk_miskin';
import EchartPosPelayanan from '../components/echart_pos_pelayanan';
import EchartAksesFasilitasKesehatan from '../components/echart_akses_fasilitas_kesehatan';
import EchartRataKesehatan from '../components/echart_rata_kesehatan';
import EchartJumlahDokter from '../components/echart_jumlah_dokter';

export default function ViewKesehatan() {
  return (
    <>
      <Stack>
        <PageSubTitle text1='DATA' text2='KESEHATAN' />
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
        <Box pb={20}>
          <Text c={"white"} fw={'bold'} fz={20}>
            KETERSEDIAAN LAYANAN PECEGAHAN STUNTING KOTA DENPASAR
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
            <EchartKelasIbuHamil />
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartKelasIbuHamilKkMiskin />
          </Box>
        </SimpleGrid>
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
              <EchartAnakButaKkMiskin />
            </Box>
          </SimpleGrid>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH POS PELAYANAN KESEHATAN KOTA DENPASAR
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartPosPelayanan />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH FASILITAS KESEHATAN KOTA DENPASAR
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartAksesFasilitasKesehatan />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              RATA-RATA JARAK KE FASILITAS KESEHATAN KOTA DENPASAR
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartRataKesehatan />
          </Box>
        </Box>
        <Box pt={40}>
          <Box pb={10}>
            <Text c={"white"} fw={'bold'} fz={20}>
              JUMLAH DOKTER KOTA DENPASAR
            </Text>
          </Box>
          <Box
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: 10,
              padding: 20
            }}
          >
            <EchartJumlahDokter />
          </Box>
        </Box>
      </Box>
    </>
  );
}
