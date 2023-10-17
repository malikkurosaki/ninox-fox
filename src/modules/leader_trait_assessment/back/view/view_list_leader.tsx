
"use client"
import React, { useState } from "react";
import {
  Box,
  Button,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import TableLeader from "../components/table_leader";
import papa from "papaparse"
import { Dropzone } from "@mantine/dropzone";
import toast from "react-simple-toasts";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

/**
 * Fungsi untuk menampilkan table list leader.
 * @param {string} title - Judul table.
 * @returns {component} Table list leader sesuai dengan parameter.
 */
export default function ViewListLeader({ title, data, }: { title: string, data: any, }) {
  const router = useRouter()
  const [isData, setData] = useState(data)
  return (
    <>
      <Stack>
        <Text fw={"bold"}>LEADER TRAIT ASSESSMENT</Text>
      </Stack>
      <Box pt={30}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: "xl" }}
        >
          <Box>
            <Paper shadow="xs" p="xl">
              <Stack>
                <Select
                  placeholder="PROVINCE"
                  data={[
                    "BALI",
                    "JAWA BARAT",
                    "JAWA TIMUR",
                    "KALIMANTAN TENGAH",
                  ]}
                  required
                  label={"Provinsi"}
                  searchable
                />
                <Select
                  placeholder="CITY"
                  data={["BADUNG", "DENPASAR", "TABANAN"]}
                />
                <Select
                  placeholder="SUBDISTRICT"
                  data={["KUTA SELATAN ", "KUTA UTARA", "MENGWI"]}
                />
                <Button
                  bg={"gray"}
                  onClick={() => router.push('leader-trait-assessment?prov=bali')}
                >
                  PROCCESS
                </Button>
              </Stack>
            </Paper>
          </Box>
          <Group
            justify="center"
            grow
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
            }}
            >
            <Box
             style={{
               border: "1px dashed gray",
               borderRadius: 10,
               padding: 40,
               cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/leader-trait-assessment/upload")}
            >
            <Text ta={"center"} size="xl" inline>
              UPLOAD
            </Text>
            </Box>


            {/*  */}
            <Box
              style={{
                border: "1px dashed gray",
                borderRadius: 10,
                padding: 40,
                cursor: "pointer",
              }}
              onClick={() => {
                const dataJson = isData

                const jsonData = papa.unparse(dataJson)
                const jsonDataUrl = "data:text/csv;charset=utf-8," + encodeURIComponent(jsonData)

                const jsonDwnloadLink = document.createElement("a")
                jsonDwnloadLink.href = jsonDataUrl
                jsonDwnloadLink.download = "Leader.csv"
                jsonDwnloadLink.click()
              }}
            >
              <Text ta={"center"} size="xl" inline>
                DOWNLOAD
              </Text>
            </Box>
          </Group>
        </SimpleGrid>
      </Box>
      {title && (
        <Box pt={30}>
          <TableLeader />
        </Box>
      )}
    </>
  );
}

