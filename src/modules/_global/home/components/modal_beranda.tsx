"use client"
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isModalBeranda } from '../../val/isModalBeranda';
import { Alert, Box, Button, Chip, Group, LoadingOverlay, Select, SimpleGrid, Text } from '@mantine/core';
import toast from 'react-simple-toasts';
import _ from 'lodash';
import { MasterKabGetByProvince, funGetAreaKabKotByProvinsi } from '../..';
import funUpdateUserArea from '../fan/update_user_area_front';


export default function ModalBeranda({ areaPro }: { areaPro: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalBeranda)
  const [dataProvinsi, setDataProvinsi] = useState(areaPro)
  const [dataKabupaten, setDataKabupaten] = useState<any>([])
  const [isProvinsi, setProvinsi] = useState(null)
  const [isKabupaten, setKabupaten] = useState(null)
  const [loadingData, setLoadingData] = useState(false)

  async function defaultWilayah() {
    if (_.isNull(isProvinsi)) return toast("Silahkan pilih provinsi", { theme: "dark" })
    setLoadingData(true)
  const data = await funUpdateUserArea({provinsi: isProvinsi, kabkot: isKabupaten})
    toast('Success', { theme: 'dark' })
    setLoadingData(false)
    setOpenModal(false)
  }
  async function onProvinsi({ idProv }: { idProv: any }) {
    setProvinsi(idProv)
    setKabupaten(null)
    const dataDbKab = await MasterKabGetByProvince({ idProvinsi: Number(idProv) })
    setDataKabupaten(dataDbKab)
  }

  async function onKabupaten({ idKab }: { idKab: any }) {
    setKabupaten(idKab)
  }


  // return <>aaa</>

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
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
            pt={20}
          >
            <Select
              placeholder="Pilih Provinsi"
              data={dataProvinsi.map((pro: any) => ({
                value: String(pro.idProvinsi),
                label: pro.name
              }))}
              value={isProvinsi}
              required
              label={"Provinsi"}
              // searchable
              onChange={(val) => onProvinsi({ idProv: val })}
            />
            <Select
              placeholder="Pilih Kabupaten/Kota"
              data={dataKabupaten.map((kab: any) => ({
                value: String(kab.id),
                label: kab.name
              }))}
              value={isKabupaten}
              label="Kabupaten/Kota"
              searchable
              onChange={(val) => onKabupaten({ idKab: val })}
            />
          </SimpleGrid>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
            pt={40}
          >
            <Button
              radius={10}
              color="red"
              onClick={() => setOpenModal(false)}
              fullWidth
            >
              CLOSE
            </Button>
            <Button fullWidth radius={10} color="green" onClick={defaultWilayah}>SUBMIT</Button>
          </SimpleGrid>
        </Alert>
      </Box>
    </>
  );
}
