import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";

const data = [
  {
    id: 1,
    kabupaten: "BADUNG",
    Confidence: 232,
    Supportive: 21,
    Positive: 311,
    Undecided: 32,
    Unsupportive: 21,
    Negative: 3232,
    Disapproval: 211,
  },
  {
    id: 2,
    kabupaten: "DENPASAR",
    Confidence: 232,
    Supportive: 21,
    Positive: 311,
    Undecided: 32,
    Unsupportive: 21,
    Negative: 3232,
    Disapproval: 211,
  },
  {
    id: 3,
    kabupaten: "BULELENG",
    Confidence: 232,
    Supportive: 21,
    Positive: 311,
    Undecided: 32,
    Unsupportive: 21,
    Negative: 3232,
    Disapproval: 211,
  },
  {
    id: 4,
    kabupaten: "GIANYAR",
    Confidence: 232,
    Supportive: 21,
    Positive: 311,
    Undecided: 32,
    Unsupportive: 21,
    Negative: 3232,
    Disapproval: 211,
  },
  {
    id: 5,
    kabupaten: "TABANAN",
    Confidence: 232,
    Supportive: 21,
    Positive: 311,
    Undecided: 32,
    Unsupportive: 21,
    Negative: 3232,
    Disapproval: 211,
  },
];
/**
 * Fungsi untuk mendapatkan nilai dari table.
 * @returns  Hasil menampilkan tabel beserta valuenya.
 */
export default function TableData() {
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
                      <Table.Th>CONFIDENCE</Table.Th>
                      <Table.Th>SUPPORTIVE</Table.Th>
                      <Table.Th>POSITIVE</Table.Th>
                      <Table.Th>UNDERCIDED</Table.Th>
                      <Table.Th>UNSUPPORTIVE</Table.Th>
                      <Table.Th>NEGATIVE</Table.Th>
                      <Table.Th>DISAPPROVAL</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {data.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{v.id}</Table.Td>
                        <Table.Td>{v.kabupaten}</Table.Td>
                        <Table.Td>{v.Confidence}</Table.Td>
                        <Table.Td>{v.Supportive}</Table.Td>
                        <Table.Td>{v.Positive}</Table.Td>
                        <Table.Td>{v.Undecided}</Table.Td>
                        <Table.Td>{v.Unsupportive}</Table.Td>
                        <Table.Td>{v.Negative}</Table.Td>
                        <Table.Td>{v.Disapproval}</Table.Td>
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
