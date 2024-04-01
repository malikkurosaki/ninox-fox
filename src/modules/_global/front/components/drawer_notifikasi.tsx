'use client'
import { Anchor, Box, Divider, Flex, Group, ScrollArea, Text, useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { IoNotificationsOffOutline } from 'react-icons/io5';
import { isDrawer } from '../val/isDrawer';
import { useAtom } from 'jotai';
import { MdBrowserUpdated } from 'react-icons/md';
import classes from './hover.module.css'
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { funGetAllNotifications, funUpdReadNotifications } from '../..';

export default function DrawerNotifikasi({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const [valOpenDrawer, setOpenDrawer] = useAtom(isDrawer)
  const router = useRouter()
  const [isData, setData] = useState(data)

  async function StartModal(id: any, kategori: any) {
    const upd = await funUpdReadNotifications({ id: id })
    let link = 'summary'
    setOpenDrawer(false)
    onSuccess(true)
    await new Promise((r) =>
      setTimeout(r, 500)
    )

    if (kategori == 'emotion') {
      link = '/summary'
    } else if (kategori == 'step') {
      link = '/step'
    } else if (kategori == 'swot') {
      link = '/swot'
    } else if (kategori == 'mlai') {
      link = '/ml-ai'
    } else if (kategori == 'pairing') {
      link = '/pairing'
    } else if (kategori == 'pct') {
      link = '/insights'
    } else if (kategori == 'lta') {
      link = '/insights'
    } else if (kategori == 'rhi') {
      link = '/insights'
    }

    router.push(link)
  }

  async function onReadNotif(value: any) {
    const upd = await funUpdReadNotifications({ id: value })
    const loadData = await funGetAllNotifications()
    setData(loadData)
    onSuccess(true)
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
            <ScrollArea h={'95vh'} scrollbarSize={2}>
              {isData.map((v: any, i: any) => {
                return (
                  <Box key={i} mb={10} m={10}>
                    <Box
                      style={{
                        border: `1px solid gray`,
                        padding: 20,
                        borderRadius: 10,
                      }}
                      className={classes.box}
                    // 
                    >
                      <Box onClick={() => StartModal(v.id, v.category)} style={{ cursor: "pointer", }}>
                        <Group>
                          <MdBrowserUpdated size={25} color={'white'} />
                          <Text fw={'bold'} c={'white'}>{v.title}</Text>
                        </Group>

                        <Box pt={5}>
                          <Text c={'white'}>{v.description}</Text>
                        </Box>
                      </Box>
                      <Divider my={5} />
                      <Group justify="space-between">
                        <Text size="sm" c={'#828282'} ta={'right'}>
                          {moment(v.createdAt).format('LLL')}
                        </Text>
                        <Anchor size={'sm'} onClick={() => { onReadNotif(v.id) }}>tandai telah dibaca</Anchor>
                      </Group>
                    </Box>
                  </Box>
                )
              })}
            </ScrollArea>
        }

      </Box>
    </>
  );
}

