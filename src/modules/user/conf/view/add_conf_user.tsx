"use client"
import { ButtonBack } from '@/modules/_global';
import { WARNA } from '@/modules/_global/fun/WARNA';
import { Box, Checkbox, Chip, Divider, Group, Select, SimpleGrid, Stack, Table, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';

export default function AddConfUser({ data }: { data: any }) {
  const [isData, setData] = useState<any[]>(data)
  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"}>ADD USER</Text>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10
          }}
        >
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Select placeholder='Pilih Role User' />
            <TextInput placeholder='Name' />
            <TextInput placeholder='Email' />
            <TextInput placeholder='Password' />
            <TextInput placeholder='Phone' />
            <Checkbox label="IS ALL AREA" mt={7} />
          </SimpleGrid>
          <Box pt={40} pb={40}>
            <Divider size={"md"} />
          </Box >
          {/* <Checkbox label="IS FRONT" mt={7} />
            <Checkbox label="IS FRONT" mt={7} /> */}
          <Text mb={10} fw={"bold"}>PILIH WILAYAH</Text>
          {/* {isData.map((item) => {
            return ( */}
          {/* // <Box key={item}>
              //   <Box
              //     style={{
              //       backgroundColor: WARNA.ungu,
              //       padding: 10,
              //       borderRadius: 10
              //     }}
              //   >
              //     <Group justify='space-around'>
              //       <Chip color="rgba(255, 255, 255, 1)" variant="light" radius="sm" >{item.name}</Chip>
              //       <Chip color="cyan" variant="light" radius="sm" >IS FRONT</Chip>
              //     </Group>
              //   </Box>
              // </Box> */}
          <Table
            withTableBorder
            horizontalSpacing="xl"
          >
            <Table.Thead>
              <Table.Tr
                style={{
                  borderBottom: "1px solid #CED4D9",
                }}
              >
                <Table.Th>No</Table.Th>
                <Table.Th>PROVINSI</Table.Th>
                <Table.Th>FRONT</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {isData.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>
                    <Chip color="red" variant="light" radius="sm" >{v.name}</Chip>
                  </Table.Td>
                  <Table.Td>
                  <Chip color="cyan" variant="light" radius="sm" >IS FRONT</Chip>
                  </Table.Td>

                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          {/* )
          })} */}
        </Box>
      </Stack>
    </>
  );
}

