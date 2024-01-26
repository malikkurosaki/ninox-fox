'use client'
import { COLOR_EMOTION, WARNA } from '@/modules/_global';
import { Box, Center, Group, Pagination, ScrollArea, Table } from '@mantine/core';
import _, { ceil } from 'lodash';
import React, { useState } from 'react';

const top10 = [
  {
    id: 1,
    provinsi: "Denpasar",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 2,
    provinsi: "Tabanan",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 3,
    provinsi: "Gianyar",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 4,
    provinsi: "Klungkung",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 5,
    provinsi: "Badung",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 6,
    provinsi: "Karangasem",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 7,
    provinsi: "Bangli",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 8,
    provinsi: "Buleleng",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
  {
    id: 9,
    provinsi: "Jembrana",
    locked: "2.890.900",
    filtered: "1.891.891",
    confidence: "3.908.178",
    supportive: "4.890.901",
    positive: "1.221.333",
    negative: "2.009.009",
  },
]

/**
 * Fungsi untuk menampilkan top 10.
 * @returns {component} menampilakn top 10.
 */

export default function TableTop10({ emotion, tingkat, locked }: { emotion: any, tingkat: any, locked: any }) {
  const [isData, setData] = useState(_.slice(emotion, 0, 10))
  const [totalPage, setTotalPage] = useState(ceil(emotion.length / 10))
  const [valPage, setPage] = useState(1)
  let noAwal = valPage * 10 - 9;

  async function onPaging(p: any) {
    const start = (10 * p) - 10;
    const end = start + 10;
    const dataNow = _.slice(emotion, start, end)
    setPage(p)
    setData(dataNow)
  }

  return (
    <>
      <Box style={{
        // backgroundColor: "#101010",
        background: "rgba(0,0,0,0.3)",
        padding: 20,
        borderRadius: 10
      }}>
        <ScrollArea>
          <Table withRowBorders={false}>
            <Table.Thead c={"white"}>
              <Table.Tr >
                <Table.Th>NO</Table.Th>
                <Table.Th w={250}>{(tingkat == 2) ? 'KECAMATAN' : 'KABUPATEN / KOTA'}</Table.Th>
                <Table.Th ta={'center'}> SUARA TERKUNCI </Table.Th>
                <Table.Th ta={'center'}> SUARA TERFILTER </Table.Th>
                <Table.Th ta={'center'}> PERCAYA DIRI </Table.Th>
                <Table.Th ta={'center'}> MENDUKUNG </Table.Th>
                <Table.Th ta={'center'}> POSITIF </Table.Th>
                <Table.Th ta={'center'}> TIDAK MEMILIH </Table.Th>
                <Table.Th ta={'center'}> TIDAK MENDUKUNG </Table.Th>
                <Table.Th ta={'center'}> TIDAK NYAMAN </Table.Th>
                <Table.Th ta={'center'}> NEGATIF </Table.Th>
                <Table.Th ta={'center'}> TIDAK SETUJU </Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody c={"white"} >
              {isData.map((v: any, i: any) => (
                <Table.Tr key={i}>
                  <Table.Td align='center'>{noAwal++}</Table.Td>
                  <Table.Td>{v.name}</Table.Td>
                  <Table.Td align='right' c={"white"}>{Intl.NumberFormat("id-ID").format(Number(locked.filter((i: any) => i.idArea === v.idArea)[0].value))}</Table.Td>
                  <Table.Td align='right' c={"white"}>{Intl.NumberFormat("id-ID").format(Number(v.filtered))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[0].color}>{Intl.NumberFormat("id-ID").format(Number(v.confidence))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[1].color}>{Intl.NumberFormat("id-ID").format(Number(v.supportive))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[2].color}>{Intl.NumberFormat("id-ID").format(Number(v.positive))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[3].color}>{Intl.NumberFormat("id-ID").format(Number(v.undecided))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[4].color}>{Intl.NumberFormat("id-ID").format(Number(v.unsupportive))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[5].color}>{Intl.NumberFormat("id-ID").format(Number(v.uncomfortable))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[6].color}>{Intl.NumberFormat("id-ID").format(Number(v.negative))}</Table.Td>
                  <Table.Td align='right' c={COLOR_EMOTION[7].color}>{Intl.NumberFormat("id-ID").format(Number(v.dissapproval))}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Box>
      <Box pt={20}>
        <Group justify='flex-end'>
          <Pagination
            total={totalPage}
            color="rgba(70, 5, 120, 1)"
            value={valPage}
            onChange={(val) => onPaging(val)}
          />
        </Group>
      </Box>
    </>
  );
}

