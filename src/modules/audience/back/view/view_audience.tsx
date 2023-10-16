"use client"
import {
  Box,
  Button,
  Container,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import UploadDataAudience from "../components/upload_data_audience";
import TableDataAudience from "../components/table_data_audience";
import { useRouter } from "next/navigation";


/**
 * Fungsi untuk menampilkan table list Audience.
 * @param {string} title - Judul table.
 * @returns {component} Table list audience sesuai dengan parameter.
 */
export default function ViewAudience({title}: {title: string}) {
  const router = useRouter()
  return (
    <>
      <Stack>
        <Text fw={"bold"}>AUDIENCE</Text>
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
                  onClick={() => router.push('audience?prov=bali')}
                >
                  PROCCESS
                </Button>
              </Stack>
            </Paper>
          </Box>
            <Group justify="center" grow style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20
            }}>

            <UploadDataAudience />
            <Box
              style={{
                border: "1px dashed gray",
                borderRadius: 10,
                padding: 40,
                cursor: "pointer"
              }}
            >
              <Text ta={"center"} size="xl" inline>
                DOWNLOAD
              </Text>
            </Box>
            </Group>
        </SimpleGrid>
      </Box>
      {title &&
      <Box pt={30}>
        <TableDataAudience/>
      </Box>
      }
    </>
  );
}
