"use client"
import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    id: 1,
    kabupaten: "BADUNG",
    value: 232,
  },
  {
    id: 2,
    kabupaten: "DENPASAR",
    value: 2323,
  },
  {
    id: 3,
    kabupaten: "BULELENG",
    value: 3443,
  },
  {
    id: 4,
    kabupaten: "GIANYAR",
    value: 22321,
  },
  {
    id: 5,
    kabupaten: "TABANAN",
    value: 5654,
  },
];
/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */

export default function TableDataAudience() {
  return (
    <>
      <Box>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text fw={"bold"} c={"white"}>
            PROVINSI BALI
          </Text>
          <Box pt={20}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <ScrollArea>
                <Table withTableBorder horizontalSpacing="xl">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>NO</Table.Th>
                      <Table.Th>KABUPATEN / KOTA</Table.Th>
                      <Table.Th>VALUE</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{v.id}</Table.Td>
                        <Table.Td>{v.kabupaten}</Table.Td>
                        <Table.Td>{v.value}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

