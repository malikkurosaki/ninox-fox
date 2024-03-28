'use client'
import { Anchor, Box, Divider, Flex, Group, Text, useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { IoNotificationsOffOutline } from 'react-icons/io5';
import { isDrawer } from '../val/isDrawer';
import { useAtom } from 'jotai';
import { MdBrowserUpdated } from 'react-icons/md';
import classes from './hover.module.css'
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { funGetAllNotifications, funUpdReadNotifications } from '../..';

const dataa = [
  {
    id: 1,
    judul: "UPDATE ML-AI",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 2,
    judul: "UPDATE EVALUASI SWOT",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 3,
    judul: "UPDATE EVALUASI STEP",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 4,
    judul: "UPDATE PENILAIAN STEP",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 5,
    judul: "UPDATE WAWASAN REGIONAL",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    id: 6,
    judul: "UPDATE WAWASAN REGIONAL",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
]


export default function DrawerNotifikasi({ data }: { data: any }) {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const [valOpenDrawer, setOpenDrawer] = useAtom(isDrawer)
  const router = useRouter()
  const [isData, setData] = useState(data)

  function StartModal() {
    setOpenDrawer(false)
    clearColorScheme()
    router.push(`/summary`)
  }

  async function onReadNotif(value: any) {
    const upd = await funUpdReadNotifications({ id: value })
    const loadData = await funGetAllNotifications()
    setData(loadData)
  }

  return (
    <>
      <Box pt={10}>
        {
          data.length == 0 ? (
            <Flex justify={'center'} align={'center'} mih={'80vh'} direction={'column'} >
              <Box mb={10}>
                <IoNotificationsOffOutline size={50} color="#696969" />
              </Box>
              <Text c={'#696969'} fw={'bold'}>TIDAK ADA NOTIFIKASI</Text>
            </Flex>
          ) :
            isData.map((v: any, i: any) => {
              return (
                <Box key={i} mb={10}>
                  <Box
                    style={{
                      border: `1px solid gray`,
                      padding: 20,
                      borderRadius: 10,
                      cursor: "pointer",
                    }}
                    className={classes.box}
                    // onClick={StartModal}
                  >
                    <Group>
                      <MdBrowserUpdated size={25} />
                      <Text fw={'bold'}>{v.title}</Text>
                    </Group>
                    <Box>
                      <Box pt={5}>
                        <Text>{v.description}</Text>
                      </Box>
                      <Divider my={5} />
                      <Group justify="space-between">
                        <Text size="sm" c={'#828282'} ta={'right'}>
                          {moment(v.createdAt).format('LLL')}
                        </Text>
                        <Anchor size={'sm'} onClick={()=>{onReadNotif(v.id)}}>tandai telah dibaca</Anchor>
                      </Group>
                    </Box>
                  </Box>
                </Box>
              )
            })
        }

      </Box>
    </>
  );
}

