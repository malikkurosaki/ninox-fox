"use client"
import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    id: 1,
    kabupaten: "BADUNG",
    cerdas: 232,
    jujur: 21,
    tegas: 311,
    agamis: 32,
    pekerja_keras: 21,
    berprestasi: 3232,
    merakyat: 3232,
  },
  {
    id: 2,
    kabupaten: "DENPASAR",
    cerdas: 232,
    jujur: 21,
    tegas: 311,
    agamis: 32,
    pekerja_keras: 21,
    berprestasi: 3232,
    merakyat: 3232,
  },
  {
    id: 3,
    kabupaten: "BULELENG",
    cerdas: 232,
    jujur: 21,
    tegas: 311,
    agamis: 32,
    pekerja_keras: 21,
    berprestasi: 3232,
    merakyat: 3232,
  },
  {
    id: 4,
    kabupaten: "GIANYAR",
    cerdas: 232,
    jujur: 21,
    tegas: 311,
    agamis: 32,
    pekerja_keras: 21,
    berprestasi: 3232,
    merakyat: 3232,
  },
  {
    id: 5,
    kabupaten: "TABANAN",
    cerdas: 232,
    jujur: 21,
    tegas: 311,
    agamis: 32,
    pekerja_keras: 21,
    berprestasi: 3232,
    merakyat: 3232,
  },
];
/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */

export default function TableLeader() {
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
                      <Table.Th>CERDAS</Table.Th>
                      <Table.Th>JUJUR</Table.Th>
                      <Table.Th>TEGAS</Table.Th>
                      <Table.Th>AGAMIS</Table.Th>
                      <Table.Th>PEKERJA KERAS</Table.Th>
                      <Table.Th>BERPRESTASI</Table.Th>
                      <Table.Th>MERAKYAT</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{v.id}</Table.Td>
                        <Table.Td>{v.kabupaten}</Table.Td>
                        <Table.Td>{v.cerdas}</Table.Td>
                        <Table.Td>{v.jujur}</Table.Td>
                        <Table.Td>{v.tegas}</Table.Td>
                        <Table.Td>{v.agamis}</Table.Td>
                        <Table.Td>{v.pekerja_keras}</Table.Td>
                        <Table.Td>{v.berprestasi}</Table.Td>
                        <Table.Td>{v.merakyat}</Table.Td>
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


