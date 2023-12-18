"use client"
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isModalBeranda } from '../../val/isModalBeranda';
import { Alert, Box, Button, Chip, Group, LoadingOverlay, SimpleGrid, Text } from '@mantine/core';
import toast from 'react-simple-toasts';

export default function ModalBeranda() {
  const [valOpenModal, setOpenModal] = useAtom(isModalBeranda)
  const [isLoading, setLoading] = useState(false)
  const [loadingData, setLoadingData] = useState(false)
  function defaultWilayah() {
    setLoadingData(true)
    toast('Success', { theme: 'dark' })
    setLoadingData(false)
    setOpenModal(false)
  }
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={loadingData}
          overlayProps={{ radius: "sm", blur: "8px", bg: "rgba(27,11,47,0.8)" }}
          loaderProps={{ color: "white" }}
        />
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            PILIH DEFAULT WILAYAH UNTUK DASHBOARD USER
          </Text>
          <Group grow pt={20}>
            <Chip.Group>
              <Group justify="center">
                <Chip size="lg" radius="sm" value="1">Kalimantan Tengah</Chip>
                <Chip size="lg" radius="sm" value="2">DKI Jakarta</Chip>
                <Chip size="lg" radius="sm" value="3">Jawa Timur</Chip>
              </Group>
            </Chip.Group>
          </Group>
          <Group pt={30} justify='center'>
            <Button fullWidth color="#4F709C" onClick={defaultWilayah}>SUBMIT</Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}
