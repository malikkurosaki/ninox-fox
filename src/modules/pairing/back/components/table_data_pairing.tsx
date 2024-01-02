'use client'
import { Avatar, Box, Group, Image, ScrollArea, Table } from "@mantine/core";
import _ from "lodash";
import React from "react";

/**
 * Fungsi menampilkan halaman table data pairing.
 * @returns  Hasil dari table data pairing untuk menampilkan data table
 */
export default function TableDataPairing({ data, th }: { data: any, th: any }) {
  return (
    <>
      <Box
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: "5px",
        }}
      >
        <ScrollArea>
          <Table withTableBorder horizontalSpacing="xl">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>KANDIDAT 1</Table.Th>
                <Table.Th>KANDIDAT 2</Table.Th>
                <Table.Th>{th}</Table.Th>
                <Table.Th>RATE</Table.Th>
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
              {data.map((v: any, i: any) => {
                v.rate = v.rate.toString()
                return (
                  <Table.Tr key={i}>
                    <Table.Td>{v.can1}</Table.Td>
                    <Table.Td>{v.can2}</Table.Td>
                    <Table.Td>{v.area}</Table.Td>
                    <Table.Td>{v.rate}%</Table.Td>
                    <Table.Td>{v.confidence}</Table.Td>
                    <Table.Td>{v.supportive}</Table.Td>
                    <Table.Td>{v.positive}</Table.Td>
                    <Table.Td>{v.undecided}</Table.Td>
                    <Table.Td>{v.unsupportive}</Table.Td>
                    <Table.Td>{v.uncomfortable}</Table.Td>
                    <Table.Td>{v.negative}</Table.Td>
                    <Table.Td>{v.dissapproval}</Table.Td>
                  </Table.Tr>
                )
              })}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>
    </>
  );
}
