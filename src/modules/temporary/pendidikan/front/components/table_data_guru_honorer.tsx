"use client"
import { COLOR_SOSIAL_EKONOMI } from '@/modules/_global';
import { Box, Group, Progress, ScrollArea, Table, Text } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { EChartsOption } from 'echarts';
import EChartsReact from 'echarts-for-react';
import _ from 'lodash';
import React, { useState } from 'react';

export default function TableDataGuruHonorer({ data }: { data: any }) {
  const [options, setOptions] = useState<EChartsOption>({})
  const [dataChart, setDataChart] = useState<any>()

  useShallowEffect(() => {
    setDataChart(
      {
        jumlah_guru_honorer: Number(data[0].value)
      }
    )
    loadData(dataChart)
  }, [data, dataChart])

  async function loadData(dataLoad: any) {
    const option: EChartsOption = {
      legend: {
        bottom: "0%",
        textStyle: {
          color: "white"
        }
      },
      tooltip: {},
      // dataset: {
      //   source: [
      //     ['data', 'Jumlah Guru Honorer'],
      //     ['Denpasar', 0],
      //   ]
      // },
      xAxis: [
        {
          type: 'category',
          data: ['Jumlah Guru Honorer'],
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
          // name: 'Nama Kota',
          type: 'bar',
          barWidth: '70%',
          data: Object.keys(dataLoad ?? []).map(
            (v: any, i: any) =>
            ({
              name: _.upperCase(v),
              value: dataLoad[v],
              itemStyle: {
                color: COLOR_SOSIAL_EKONOMI[i]
              },
            })
          ),
        }
      ]
    };
    setOptions(option)
  }

  return (
    <>
      <Box pb={10}>
        <Text c={"white"} fw={'bold'} fz={20}>
          DATA GURU HONORER
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