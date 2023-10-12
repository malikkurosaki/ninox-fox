"use client";
import {
  Box,
  Button,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TablePopularity from "../components/table_popularity";

/**
 * Fungsi menampilkan halaman popularity.
 * @returns  Hasil dari Popularity menampilkan fitur copy data dan upload data.
 */
export default function ViewPopularity({title}: {title: string}) {
  const router = useRouter();
  return (
    <>
      <Stack>
        <Text fw={"bold"}>NATIONAL POPULARITY METRICS</Text>
      </Stack>
      <Group grow pt={30}>
        <Select
          placeholder="PROVINCE"
          data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
        />
        <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
        <DateInput valueFormat="YYYY MMM DD" placeholder="Date input" />
        <Button bg={"gray"} onClick={() => router.push('popularity?prov=bali')}>
          PROCCESS
        </Button>
      </Group>
      {title && (
        <Box>
          <Box pt={40}>
            <Group grow>
              <Button
                bg={"gray"}
                onClick={() => router.push("/dashboard/popularity/copy")}
              >
                COPY DATA
              </Button>
              <Button bg={"gray"}> DOWNLOAD CSV</Button>
              <Button
                bg={"gray"}
                onClick={() => router.push("/dashboard/popularity/upload")}
              >
                UPLOAD CSV
              </Button>
            </Group>
          </Box>
          <Box pt={30}>
            <TablePopularity />
          </Box>
        </Box>
      )}
    </>
  );
}
