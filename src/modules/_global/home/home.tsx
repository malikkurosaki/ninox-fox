"use client"

import { Box, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';
import { provinsiCount } from '../fun/fun_provinsi_count';

/**
 * Fungsi untuk menampilkan dashboard.
 * @returns  hasilk yang ditampilkan seperti daftar access wilayah, jumlah kandidate, jumlah wilayah
 */
export default function Home({ pro, kab, kec, kel, can1, can2 }: { pro: number, kab: number, kec: number, kel: number, can1: number, can2: number }) {
  const [isProvinsi, setProvinsi] = useState(pro)
  const [isKab, setKab] = useState(kab)
  const [isKec, setKec] = useState(kec)
  const [isKel, setKel] = useState(kel)
  const [isCand1, setCan1] = useState(can1)
  const [isCand2, setCan2] = useState(can2)


  return (
    <>
      <Text fz={25} c={'#213555'} fw={'bold'}>HI ADMIN 2</Text>
      <Group>
        <Text c={"#4F709C"}>DEFAULT WILAYAH UNTUK DASHBOARD USER</Text>
        <Text c={"#4F709C"} fw={'bold'}>JAWA TIMUR</Text>
      </Group>


      <Box pt={30}>
        <Group grow>
          <Box style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5
          }}>
            <Box pb={10}>
              <Text c={"#4F709C"} fw={'bold'}>DAFTAR AKSES WILAYAH</Text>
            </Box>
            <Group grow>
              <Box
                style={{
                  backgroundColor: "#4F709C",
                  padding: 20,
                  borderRadius: 5
                }}
              >
                <Text c={"white"} ta={'center'}>Kalimantan Tengah</Text>
              </Box>
              <Box
                style={{
                  backgroundColor: "#4F709C",
                  padding: 20,
                  borderRadius: 5
                }}
              >
                <Text c={"white"} ta={'center'}>DKI Jakarta</Text>
              </Box>
              <Box
                style={{
                  backgroundColor: "#4F709C",
                  padding: 20,
                  borderRadius: 5
                }}
              >
                <Text c={"white"} ta={'center'}>Jawa Timur</Text>
              </Box>
            </Group>
          </Box>
        </Group>
      </Box>
      <Box pt={30}>
        <Box style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5
        }}>
          <Box pb={10}>
            <Text c={"#4F709C"} fw={'bold'}>JUMLAH KANDIDAT</Text>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>PROVINSI</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>{isCand1}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>{isCand2}</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Box pt={30}>
        <Box style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5
        }}>
          <Box pb={10}>
            <Text c={"#4F709C"} fw={'bold'}>JUMLAH WILAYAH</Text>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>PROVINSI</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{isProvinsi}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{isKab}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KECAMATAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{isKec}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KELURAHAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{isKel}</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

    </>

  );
}
