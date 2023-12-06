import { ActionIcon, Box, Group, ScrollArea, Table, Text } from "@mantine/core";
import { AnyCnameRecord } from "dns";
import React, { useEffect, useState } from "react";
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
export default function TableData({ title, data, th }: { title: string, data: any, th: any }) {


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
                      <Table.Th>NO</Table.Th>
                      <Table.Th>{th}</Table.Th>
                      <Table.Th>CONFIDENCE</Table.Th>
                      <Table.Th>SUPPORTIVE</Table.Th>
                      <Table.Th>POSITIVE</Table.Th>
                      <Table.Th>UNDECIDED</Table.Th>
                      <Table.Th>UNSUPPORTIVE</Table.Th>
                      <Table.Th>UNCOMFORTABLE</Table.Th>
                      <Table.Th>NEGATIVE</Table.Th>
                      <Table.Th>DISSAPPROVAL</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {isData.map((v: any, i: any) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.confidence}</Table.Td>
                        <Table.Td>{v.supportive}</Table.Td>
                        <Table.Td>{v.positive}</Table.Td>
                        <Table.Td>{v.undecided}</Table.Td>
                        <Table.Td>{v.unsupportive}</Table.Td>
                        <Table.Td>{v.negative}</Table.Td>
                        <Table.Td>{v.disapproval}</Table.Td>
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
