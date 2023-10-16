import { Box, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import React from 'react';

export default function Home() {
  return (
    <>
      <Text fz={25} c={'#213555'} fw={'bold'}>HI ADMIN 2</Text>

      <Box pt={30}>
        <Group grow>
          <Box style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5
          }}>
            <Box pb={10}>
              <Text c={"#4F709C"} fw={'bold'}>DAFTAR ACCESS WILAYAH</Text>
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
            <Text c={"#4F709C"} fw={'bold'}>JUMLAH CANDIDATE</Text>
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
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>50</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>73</Text>
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
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>3</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>21</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KECAMATAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>43</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KELURAHAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>87</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>

    </>

  );
}
