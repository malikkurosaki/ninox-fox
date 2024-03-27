'use client'
import { ActionIcon, Anchor, Box, Button, Divider, Grid, Group, Paper, ScrollArea, Text, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { IoClose, IoCloseCircleOutline } from 'react-icons/io5';
import { isDrawer } from '../val/isDrawer';
import { useAtom } from 'jotai';
import { IoMdClose } from 'react-icons/io';
import { WARNA } from '../../fun/WARNA';
import { MdBrowserUpdated } from 'react-icons/md';
import { useHover } from '@mantine/hooks';
import classes from './hover.module.css'
import { useRouter } from 'next/navigation';

const data = [
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
    id: 5,
    judul: "UPDATE WAWASAN REGIONAL",
    Desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
]


export default function DrawerNotifikasi() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const [valOpenDrawer, setOpenDrawer] = useAtom(isDrawer)
  const router = useRouter()
  function StartModal() {
    setOpenDrawer(false)
    clearColorScheme()
    router.push(`/summary`)
  }
  return (
    <>
      <Box pt={10}>
      {data.map((v, i) => {
        return (
          <Box key={i} mb={10}
          >
            <Box 
            style={{
              border: `1px solid gray`,
              padding: 20,
              borderRadius: 10,
              cursor: "pointer",
            }}
            className={classes.box}
            onClick={StartModal}
            >
              <Group justify='space-between'>
                <Group>
                  <MdBrowserUpdated size={25} />
                  <Text>{v.judul}</Text>
                </Group>
                <Anchor>Read</Anchor>
              </Group>
              <Box>

                <Box pt={10}>
                  <Text>{v.Desc}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}
      </Box>
    </>
  );
}

