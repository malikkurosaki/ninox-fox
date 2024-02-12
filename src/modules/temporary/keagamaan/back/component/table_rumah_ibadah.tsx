"use client"
import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */

export default function TableRumahIbadah({ title, data, th }: { title: string, data: any, th: any }) {
  const [isData, setData] = useState(data)

  useShallowEffect(() => {
    setData(data)
  }, [data])

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
            {title}
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
                      <Table.Th>{th}</Table.Th>
                      <Table.Th>Masjid</Table.Th>
                      <Table.Th>Gereja Khatolik</Table.Th>
                      <Table.Th>Gereja Protestan</Table.Th>
                      <Table.Th>Pura</Table.Th>
                      <Table.Th>Wihara</Table.Th>
                      <Table.Th>Kelenteng</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {isData.map((v: any, i: any) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i+1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.masjid}</Table.Td>
                        <Table.Td>{v.gerejaKhatolik}</Table.Td>
                        <Table.Td>{v.gerejaProtestan}</Table.Td>
                        <Table.Td>{v.pura}</Table.Td>
                        <Table.Td>{v.wihara}</Table.Td>
                        <Table.Td>{v.kelenteng}</Table.Td>
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

