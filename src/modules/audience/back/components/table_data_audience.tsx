"use client"
import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    id: 1,
    kabupaten: "BADUNG",
    Pendidikan: 232,
    infrastruktur: 21,
    layanan: 311,
    kemiskinan: 32,
    keadilan: 21,
    pekerjaan: 3232,
  },
  {
    id: 2,
    kabupaten: "DENPASAR",
    Pendidikan: 232,
    infrastruktur: 21,
    layanan: 311,
    kemiskinan: 32,
    keadilan: 21,
    pekerjaan: 3232,
  },
  {
    id: 3,
    kabupaten: "BULELENG",
    Pendidikan: 232,
    infrastruktur: 21,
    layanan: 311,
    kemiskinan: 32,
    keadilan: 21,
    pekerjaan: 3232,
  },
  {
    id: 4,
    kabupaten: "GIANYAR",
    Pendidikan: 232,
    infrastruktur: 21,
    layanan: 311,
    kemiskinan: 32,
    keadilan: 21,
    pekerjaan: 3232,
  },
  {
    id: 5,
    kabupaten: "TABANAN",
    Pendidikan: 232,
    infrastruktur: 21,
    layanan: 311,
    kemiskinan: 32,
    keadilan: 21,
    pekerjaan: 3232,
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
                      <Table.Th>PENDIDIKAN</Table.Th>
                      <Table.Th>INFRASTRUKTUR</Table.Th>
                      <Table.Th>LAYANAN KESEHATAN</Table.Th>
                      <Table.Th>KEMISKINAN</Table.Th>
                      <Table.Th>KEADILAN SOSIAL</Table.Th>
                      <Table.Th>LAPANGAN PEKERJAAN</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{v.id}</Table.Td>
                        <Table.Td>{v.kabupaten}</Table.Td>
                        <Table.Td>{v.Pendidikan}</Table.Td>
                        <Table.Td>{v.infrastruktur}</Table.Td>
                        <Table.Td>{v.layanan}</Table.Td>
                        <Table.Td>{v.kemiskinan}</Table.Td>
                        <Table.Td>{v.keadilan}</Table.Td>
                        <Table.Td>{v.pekerjaan}</Table.Td>
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

