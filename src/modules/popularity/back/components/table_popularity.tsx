import { Avatar, Box, Group, Image, Table } from "@mantine/core";
import React from "react";

const data = [
  {
    id: 1121,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 1223,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 3433,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 1212,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 7617,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 7617,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 7617,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },
  {
    id: 7617,
    candidate1: "I Wayan Adi",
    candidate2: "I Komang Ayu",
    Confidence: 22221,
    Supportive: 12121,
    image1: "/profile.png",
    image2: "/profile.png",
  },

];

export default function TablePopularity() {
  return (
    <>
      <Box
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: "5px",
        }}
      >
        <Table withTableBorder horizontalSpacing="xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th>CANDIDATE 1</Table.Th>
              <Table.Th>CANDIDATE 2</Table.Th>
              <Table.Th>ID</Table.Th>
              <Table.Th>CONFIDENCE</Table.Th>
              <Table.Th>SUPPORTIVE</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((v, i) => (
              <Table.Tr key={i}>
                <Table.Td>
                  <Group>
                    <Avatar src={v.image1} alt="it's me" />
                    <Avatar src={v.image2} alt="it's me" />
                  </Group>
                </Table.Td>
                <Table.Td>{v.candidate1}</Table.Td>
                <Table.Td>{v.candidate2}</Table.Td>
                <Table.Td>{v.id}</Table.Td>
                <Table.Td>{v.Confidence}</Table.Td>
                <Table.Td>{v.Supportive}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
    </>
  );
}
