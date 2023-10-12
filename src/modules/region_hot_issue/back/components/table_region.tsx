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
import React from "react";

const data = [
  {
    id: "1",
    kabupaten: "BADUNG",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 2,
    kabupaten: "DENPASAR",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 3,
    kabupaten: "BULELENG",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 4,
    kabupaten: "GIANYAR",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    id: 5,
    kabupaten: "TABANAN",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
];
/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */

export default function TableRegion() {
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
                      <Table.Th w={20}>
                        <Center>NO</Center>
                      </Table.Th>
                      <Table.Th>KABUPATEN / KOTA</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>
                          <Center>{v.id}</Center>
                        </Table.Td>
                        <Table.Td>
                          <Accordion transitionDuration={1000}>
                            <Accordion.Item key={v.value} value={v.value} style={{
                              border: "none",
                            }}>
                              <Accordion.Control style={{
                               borderRadius: 10,
                               
                              }}>
                                {v.kabupaten}
                              </Accordion.Control>
                              <Accordion.Panel>
                                <Box style={{
                                  backgroundColor: "gray",
                                  padding: 20,
                                  borderRadius: 10
                                }}>
                                  <Text c={"white"}>{v.value}</Text>
                                </Box>
                              </Accordion.Panel>
                            </Accordion.Item>
                          </Accordion>
                        </Table.Td>
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
