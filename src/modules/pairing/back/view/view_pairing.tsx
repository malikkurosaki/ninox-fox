"use client";
import {
  Box,
  Button,
  Grid,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TableDataPairing from "../components/table_data_pairing";
import { DateInput } from "@mantine/dates";
import UploadDataPairing from "../components/upload_data_pairing";

/**
 * Fungsi untuk menampilkan table list pairing.
 * @param {string} title - Judul table.
 * @returns {component} Table list pairing sesuai dengan parameter.
 */
export default function ViewPairing({ title }: { title: string }) {
  const router = useRouter();
  return (
    <>
      <Stack>
        <Text fw={"bold"}>REGIONAL DATA PAIRING</Text>
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
                  mt={10}
                />
                <Select
                  placeholder="CANDIDATE 1"
                  data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
                  required
                  label={"Candidate 1"}
                  searchable
                />
                <Select
                  placeholder="CANDIDATE 2"
                  data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
                  required
                  label={"Candidate 2"}
                  searchable
                />
                <DateInput
                  valueFormat="YYYY MMM DD"
                  placeholder="SELECT DATE"
                  required
                  label={"Select Date"}
                />
                <Button bg={"gray"} onClick={() => router.push('pairing?prov=bali')}>
                  PROCCESS
                </Button>
              </Stack>
            </Paper>
          </Box>
          {title &&
            <Box>
              <UploadDataPairing />
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
                    onClick={() => router.push("pairing/copy-data")}
                  >
                    <Text c={"white"} fw={"bold"} ta={"center"}>
                      COPY DATA
                    </Text>
                  </Box>
                </Box>
              </Group>
            </Box>
          }
        </SimpleGrid>
      </Box>
      {title &&
        <Box pt={30}>
          <TableDataPairing />
        </Box>
      }
    </>
  );
}
