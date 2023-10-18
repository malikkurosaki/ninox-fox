"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { useRouter } from "next/navigation";
import UploadData from "../components/upload_data";
import TableData from "../components/table_data";
import { MasterKabGetByProvince } from "@/modules/_global";
import _ from "lodash";
import { funGetCandidateActiveByArea } from "@/modules/candidate";


/**
 * Fungsi untuk menampilkan table list Emotion.
 * @param {string} title - Judul table.
 * @returns {component} Table list Emotion sesuai dengan parameter.
 */
export default function ViewBackEmotion({ param, provinsi, kabupaten, candidate }: { param: any, provinsi: any, kabupaten: any, candidate: any }) {
  const router = useRouter()
  const [dataProvinsi, setDataProvinsi] = useState(provinsi)
  const [dataKabupaten, setDataKabupaten] = useState<any>(kabupaten)
  const [dataCandidate, setDataCandidate] = useState<any>(candidate)
  const [isProvinsi, setProvinsi] = useState<any>(param.idProvinsi || null)
  const [isKabupaten, setKabupaten] = useState<any>(param.idKabkot || null)
  const [isCandidate, setCandidate] = useState<any>(param.idCandidate || null)
  const nowDate = new Date();

  console.log(nowDate.getDate() + ' ' + nowDate.getMonth() + ' ' + nowDate.getFullYear())

  useEffect(() => {
    setProvinsi((param.idProvinsi == 0) ? null : param.idProvinsi)
    setKabupaten((param.idKabkot == 0) ? null : param.idKabkot)
    setCandidate((param.idCandidate == 0) ? null : param.idCandidate)
  }, [param])

  async function onProvinsi({ idProv }: { idProv: any }) {
    setProvinsi(idProv)
    setKabupaten(null)
    const dataDbKab = await MasterKabGetByProvince({ idProvinsi: Number(idProv) })
    const dataDbCan = await funGetCandidateActiveByArea({ find: { idProvinsi: Number(idProv), tingkat: 1 } })
    setDataKabupaten(dataDbKab)
    setDataCandidate(dataDbCan)
  }


  async function onKabupaten({ idKab }: { idKab: any }) {
    setKabupaten(idKab)
    const dataDbCan = await funGetCandidateActiveByArea({ find: { idProvinsi: Number(isProvinsi), idKabkot: Number(idKab), tingkat: 2 } })
    setDataCandidate(dataDbCan)
  }


  return (
    <>
      <Stack>
        <Text fw={"bold"}>EMOTION EDITOR</Text>
      </Stack>
      <Box pt={30}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <Box>
            <Paper shadow="xs" p="xl">
              <Stack>
                <Select
                  placeholder="PROVINCE"
                  data={dataProvinsi.map((pro: any) => ({
                    value: String(pro.id),
                    label: pro.name
                  }))}
                  value={isProvinsi}
                  required
                  label={"Provinsi"}
                  searchable
                  onChange={(val) => onProvinsi({ idProv: val })}
                />
                <Select
                  placeholder="CITY"
                  data={dataKabupaten.map((kab: any) => ({
                    value: String(kab.id),
                    label: kab.name
                  }))}
                  value={isKabupaten}
                  label="Kabupaten/Kota"
                  searchable
                  onChange={(val) => onKabupaten({ idKab: val })}
                />
                <Select
                  placeholder="CANDIDATE"
                  data={dataCandidate.map((can: any) => ({
                    value: String(can.id),
                    label: can.name
                  }))}
                  required
                  value={isCandidate}
                  label={"Candidate"}
                  searchable
                />
                <DateInput valueFormat="DD-MM-YYYY" required
                  label={"Select Date"} placeholder="SELECT DATE" />
                <Button bg={"gray"} onClick={() => router.push('emotion?prov=bali')}>
                  PROCCESS
                </Button>
              </Stack>
            </Paper>
          </Box>
          <Box>
            <Box style={{
              backgroundColor: "white",
              padding: 16,
              borderRadius: 10
            }}>
              <Group justify="center">

                <UploadData />
              </Group>
            </Box>
            {(param.idProvinsi > 0) && (
              <Group justify="space-between" grow pt={30}>
                <Box>
                  <Box
                    style={{
                      borderRadius: 10,
                      padding: 30,
                      paddingTop: 50,
                      paddingBottom: 50,
                      backgroundColor: "gray",
                      cursor: "pointer",
                    }}
                  >
                    <Text c={"white"} fw={"bold"} ta={"center"}>
                      DOWNLOAD
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Box
                    style={{
                      borderRadius: 10,
                      padding: 30,
                      paddingTop: 50,
                      paddingBottom: 50,
                      backgroundColor: "gray",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("emotion/copy-data")}
                  >
                    <Text c={"white"} fw={"bold"} ta={"center"}>
                      COPY DATA
                    </Text>
                  </Box>
                </Box>
              </Group>
            )}
          </Box>
        </SimpleGrid>
      </Box>
      {(param.idProvinsi > 0) && (
        <Box pt={20}>
          <TableData />
        </Box>
      )}
    </>
  );
}

// export default function ViewBackEmotion() {
