"use client";
import {
  Accordion,
  ActionIcon,
  Box,
  Center,
  Group,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import ComponentTableRHI from "./component_table_rhi";

/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */

export default function TableRegion({ title, data, th }: { title: string, data: any, th: any }) {
  const [isData, setData] = useState(data)

  useEffect(() => {
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
                      <Table.Th w={20}>
                        <Center>NO</Center>
                      </Table.Th>
                      <Table.Th>{th}</Table.Th>
                      <Table.Th>
                        <Center>Aksi</Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {isData.map((v: any, i: any) => (
                    <ComponentTableRHI v={v} i={i} key={i} />
                  ))}
                </Table>
              </ScrollArea>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
