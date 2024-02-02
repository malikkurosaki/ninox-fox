"use client"
import { Box, Group, Progress, ScrollArea, Table, Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import React, { useState } from 'react';

const dataGuru = [
  {
    id: 1,
    daerah: "Denpasar",
    persentase: '34%'
  },
  {
    id: 2,
     persentase: '64%',
    daerah: "Jembrana",
  },
  {
    id: 3,
     persentase: '84%',
    daerah: "Bangli",
  },
  {
    id: 4,
     persentase: '24%',
    daerah: "Badung",
  },
  {
    id: 5,
     persentase: '44%',
    daerah: "Giayar",
  }
]

export default function TableDataGuruTersertifikasi() {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const option: EChartsOption = {
      legend: {
        bottom: "0%",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['data', 'Jumlah Guru Tersertifikasi'],
          // ['Denpasar',121, 90, 233,  23],
          ['Denpasar', 18520],
          // ['Badung', 12, 21, 31 , 11],
          // ['Giayar', 32, 33, 10 , 1],
          // ['Buleleng', 23, 32, 32, 8],
          // ['Klungkung', 44, 43, 2, 1],
        ]
      },
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            color: "white",
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          show: true,
          splitLine: {
            lineStyle: {
              color: "gray",
              opacity: 0.1
            }
          },
          axisLabel: {
            color: "white"
          },
        }
      ],
      series: [
        {
          type: 'bar', itemStyle: {
            color: "orange"
          }
        }
      ]
    };
    setOptions(option)
  }

  return (
    <>
      <Box pb={10}>
        <Text c={"white"} fw={'bold'} fz={20}>
          DATA GURU TERSERTIFIKASI KOTA DENPASAR
        </Text>
      </Box>
      <Box
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          borderRadius: 10,
          padding: 20
        }}
      >
        {/* <ScrollArea>
          <Table withRowBorders={false} >
            <Table.Thead c={"white"}>
              <Table.Tr >
                <Table.Th w={50} ta={"center"}>NO</Table.Th>
                <Table.Th w={300}>KABUPATEN / KOTA</Table.Th>
                <Table.Th>DATA VALUE</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody c={"white"} >
              {dataGuru.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td ta={"center"}>
                    {i + 1}
                  </Table.Td>
                  <Table.Td>{v.daerah}</Table.Td>
                  <Table.Td>
                    <Group justify="flex-end" >
                      <Text fz="sm" c="dimmed">
                        {v.persentase}
                      </Text>
                    </Group>
                    <Progress value={62} mt={5} color={"#FBA500"} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea> */}
        <EChartsReact style={{ height: 400 }} option={options} />
      </Box>
    </>
  );
}
