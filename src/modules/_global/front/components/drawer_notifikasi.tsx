'use client'
import { Anchor, Box, Divider, Flex, Group, ScrollArea, Text, useMantineColorScheme } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { IoNotificationsOffOutline } from 'react-icons/io5';
import { isDrawer } from '../val/isDrawer';
import { useAtom } from 'jotai';
import { MdBrowserUpdated } from 'react-icons/md';
import classes from './hover.module.css'
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { funGetAllNotifications, funUpdReadNotifications } from '../..';
import { useWindowScroll } from '@mantine/hooks';
import { ScrollLoader } from 'next-scroll-loader'


export default function DrawerNotifikasi({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const [valOpenDrawer, setOpenDrawer] = useAtom(isDrawer)
  const router = useRouter()
  const [isData, setData] = useState(data.falseRead)
  const [isDataRead, setDataRead] = useState(data.trueRead)

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
    } else if (kategori == 'mlai-request') {
      link = '/data-learner'
    } else if (kategori == 'pairing') {
      link = '/pairing'
    } else if (kategori == 'pct') {
      link = '/insights'
    } else if (kategori == 'lta') {
      link = '/insights'
    } else if (kategori == 'rhi') {
      link = '/insights'
    } else {
      if (kategori == 'ketenagakerjaan') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'infrastruktur-transportasi') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'keagamaan') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'pendidikan') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'kesehatan') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'ekonomi') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'pertanian') {
        link = '/data-sosial-ekonomi/' + kategori
      } else if (kategori == 'kemiskinan-ketimpangan') {
        link = '/data-sosial-ekonomi/' + kategori
      }
    }

    router.push(link)
  }

  async function onReadNotif(value: any) {
    const upd = await funUpdReadNotifications({ id: value })
    const loadData = await funGetAllNotifications({ page: 1 })
    setData(loadData.falseRead)
    setDataRead(loadData.trueRead)
    onSuccess(true)
  }

  const [scrollPosition, onScrollPositionChange] = useState(0)
  const viewport = useRef<HTMLDivElement>(null)
  const [scroll, scrollTo] = useWindowScroll()

  function onScroll(val: any) {
    console.log(val)
    onScrollPositionChange(val)
    console.log(viewport.current!.scrollHeight)
  }

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: 977, behavior: 'smooth' });

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
            // <ScrollArea
            //   h={'95vh'}
            //   scrollbarSize={2}
            //   viewportRef={viewport}
            //   onScrollPositionChange={(val) => onScroll(val.y)}
            // >



          // </ScrollArea>
          <ScrollLoader url="/api/scroll-loader" take={3}>
          {(data: any) =>
            <Box>
              <Box key={data} mb={10} m={10}>
                <Box
                  style={{
                    border: `1px solid white`,
                    padding: 20,
                    borderRadius: 10,
                  }}
                  className={classes.box}
                >
                  <Box onClick={() => StartModal(data.id, data.category)} style={{ cursor: "pointer", }}>
                    <Group>
                      <MdBrowserUpdated size={25} color={'white'} />
                      <Text fw={'bold'} c={'white'}>{data.title}</Text>
                    </Group>

                    <Box pt={5}>
                      <Text c={'white'}>{data.description}</Text>
                    </Box>
                  </Box>
                  <Divider my={5} color='white' />
                  <Group justify="space-between">
                    <Text size="sm" c={'#828282'} ta={'right'}>
                      {moment(data.createdAt).format('LLL')}
                    </Text>
                    <Anchor size={'sm'} onClick={() => { onReadNotif(data.id) }}>tandai telah dibaca</Anchor>
                  </Group>
                </Box>
              </Box>
            </Box>

          }
        </ScrollLoader>

          // <ScrollL
        }

      </Box>
    </>
  );
}

