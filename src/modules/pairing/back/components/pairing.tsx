"use client";
import {
  Box,
  Button,
  Grid,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import TableDataPairing from "./table_data_pairing";
import { useRouter } from "next/navigation";

/**
 * Fungsi menampilkan halaman pairing.
 * @returns  Hasil dari pairing menampilkan fitur download, upload , table
 */
export default function Pairing() {
  const [valuePairing, setValuePairing] = useState(false);
  const router = useRouter();
  return (
    <>
      <Stack>
        <Text fw={"bold"}>REGIONAL DATA PAIRING</Text>
      </Stack>
      <Box pt={30}>
        <Grid grow>
          <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
            <Select
              placeholder="Pilih Provinsi"
              data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
            <Select
              placeholder="Pilih Kabupaten/Kota"
              data={["BADUNG", "DENPASAR", "TABANAN"]}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 2, lg: 2 }}>
            <Button bg={"gray"} fullWidth onClick={() => setValuePairing(true)}>
              PROSES
            </Button>
          </Grid.Col>
        </Grid>
      </Box>
      {valuePairing && (
        <Box>
          <Box pt={40}>
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 5 }}
              spacing={{ base: 10, sm: "xl" }}
              verticalSpacing={{ base: "md", sm: "xl" }}
            >
              <Button bg={"gray"}>DOWNLOAD</Button>
              <Button
                bg={"gray"}
                onClick={() => router.push("/dashboard/pairing/upload")}
              >
                UPLOAD
              </Button>
              <Select
                placeholder="KANDIDAT 1"
                data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
              />
              <Select
                placeholder="KANDIDAT 2"
                data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
              />
              <Button bg={"gray"}>PROSES</Button>
            </SimpleGrid>
          </Box>
          <Box pt={30}>
            <TableDataPairing />
          </Box>
        </Box>
      )}
    </>
  );
}
