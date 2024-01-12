"use client"
import { Box, Group, Progress, ScrollArea, Table, Text } from '@mantine/core';
import React from 'react';

const dataGuru = [
  {
    id: 1,
    daerah: "Denpasar",
  },
  {
    id: 2,
    daerah: "Jembrana",
  },
  {
    id: 3,
    daerah: "Bangli",
  },
  {
    id: 4,
    daerah: "Badung",
  },
  {
    id: 5,
    daerah: "Giayar",
  }
]

export default function TableDataGuruTersertifikasi() {
  return (
    <>
      <Box pb={10}>
        <Text c={"white"} fw={'bold'} fz={20}>
          DATA GURU TERSERTIFIKASI MENURUT KAB/KOTA
        </Text>
      </Box>
      <Box
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 10,
          padding: 20
        }}
      >
        <ScrollArea>
          <Table withRowBorders={false} >
            <Table.Thead c={"white"}>
              <Table.Tr >
                <Table.Th w={50} ta={"center"}>NO</Table.Th>
                <Table.Th w={300}>KABUPATEN / KOTA</Table.Th>
                <Table.Th>DATA VALUE</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody c={"white"} >
              {dataGuru.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td ta={"center"}>
                    {i + 1}
                  </Table.Td>
                  <Table.Td>{v.daerah}</Table.Td>
                  <Table.Td>
                    <Group justify="space-between" >
                      <Text fz="sm" c="dimmed">
                        Progress
                      </Text>
                      <Text fz="sm" c="dimmed">
                        62%
                      </Text>
                    </Group>
                    <Progress value={62} mt={5} color={"#FBA500"} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>
    </>
  );
}
