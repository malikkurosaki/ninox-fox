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
import UploadDataAudience from "./upload_data_audience";
import TableDataAudience from "./table_data_audience";


/**
 * Fungsi menampilkan halaman audience.
 * @returns  Hasil dari audience select dan download
 */
export default function Audience() {
  const [valueAudience, setAudience] = useState(false)
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
                  onClick={() => setAudience(true)}
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
      {valueAudience &&
      <Box pt={30}>
        <TableDataAudience/>
      </Box>
      }
    </>
  );
}
