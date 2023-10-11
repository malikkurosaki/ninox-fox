"use client";
import { Box, Button, Group, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import TablePopularity from "./table_popularity";
import { useRouter } from "next/navigation";

export default function Popularity() {
  const [valuePopularity, setValuePopularity] = useState(false);
  const router = useRouter();
  return (
    <>
      <Group grow>
        <Select
          placeholder="PROVINCE"
          data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
        />
        <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
        <DateInput valueFormat="YYYY MMM DD" placeholder="Date input" />
        <Button bg={"gray"} onClick={() => setValuePopularity(true)}>
          PROCCESS
        </Button>
      </Group>
      {valuePopularity && (
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
