"use client"
import { Box, Button, Group, Modal, Select, SimpleGrid, Stack, Text } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { isModalBeranda } from '../val/isModalBeranda';
import ModalBeranda from './components/modal_beranda';
import { funGetAreaKabKotByProvinsi } from '..';
import _ from 'lodash';
import toast from 'react-simple-toasts';
import { useRouter } from 'next/navigation';

/**
 * Fungsi untuk menampilkan dashboard.
 * @returns  hasilk yang ditampilkan seperti daftar access wilayah, jumlah kandidate, jumlah wilayah
 */

export default function Home({ areaPro, pro, kab, kec, kel, can1, can2, valWilayah }: { areaPro: any, pro: number, kab: number, kec: number, kel: number, can1: number, can2: number, valWilayah: any }) {

  const router = useRouter()

  const [valOpenModal, setOpenModal] = useAtom(isModalBeranda)
  const [isValWilayah, setValWilayah] = useState(valWilayah)
  const [allProvinsi, setAllProvinsi] = useState(areaPro)

  return (
    <>
      <Text fz={25} c={'#213555'} fw={'bold'}>HI BALI INDONESIA</Text>
      <Group>
        <Text c={"#4F709C"}>DEFAULT WILAYAH UNTUK DASHBOARD USER</Text>
        <Button variant="outline" color="#4F709C" radius="xl" onClick={() => setOpenModal(true)}>{isValWilayah}</Button>
      </Group>
      <Box pt={30}>
        <Group grow>
          <Box style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5
          }}>
            <Box pb={10}>
              <Text c={"#4F709C"} fw={'bold'}>DAFTAR AKSES WILAYAH</Text>
            </Box>
            {/* {JSON.stringify(allProvinsi)} */}
            <Group grow>
              <SimpleGrid
                cols={{ base: 1, sm: 3, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
              >
                <Box
                  style={{
                    backgroundColor: "#4F709C",
                    padding: 20,
                    borderRadius: 5
                  }}
                >
                  <Text c={"white"} ta={'center'}>Kalimantan Tengah</Text>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#4F709C",
                    padding: 20,
                    borderRadius: 5
                  }}
                >
                  <Text c={"white"} ta={'center'}>DKI Jakarta</Text>
                </Box>
                <Box
                  style={{
                    backgroundColor: "#4F709C",
                    padding: 20,
                    borderRadius: 5
                  }}
                >
                  <Text c={"white"} ta={'center'}>Jawa Timur</Text>
                </Box>
              </SimpleGrid>
            </Group>
          </Box>
        </Group>
      </Box>
      <Box pt={30}>
        <Box style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5
        }}>
          <Box pb={10}>
            <Text c={"#4F709C"} fw={'bold'}>JUMLAH KANDIDAT</Text>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>PROVINSI</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>{can1}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={70}>{can2}</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Box pt={30}>
        <Box style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 5
        }}>
          <Box pb={10}>
            <Text c={"#4F709C"} fw={'bold'}>JUMLAH WILAYAH</Text>
          </Box>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>PROVINSI</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{Intl.NumberFormat("id-ID").format(Number(pro))}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KABUPATEN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{Intl.NumberFormat("id-ID").format(Number(kab))}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KECAMATAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{Intl.NumberFormat("id-ID").format(Number(kec))}</Text>
              </Box>
            </Box>
            <Box>
              <Box style={{
                backgroundColor: "#4F709C",
                padding: 20,
                borderRadius: 5
              }}>
                <Text c={"white"}>KELURAHAN</Text>
                <Text ta={'center'} fw={'bold'} c={"white"} fz={60}>{Intl.NumberFormat("id-ID").format(Number(kel))}</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
        size={"xl"}
      >
        <ModalBeranda areaPro={areaPro} />
      </Modal>
    </>

  );
}
