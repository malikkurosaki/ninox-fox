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
import React from "react";
import { useState } from "react";
import { DateInput } from "@mantine/dates";
import UploadData from "./upload_data";
import TableData from "./table_data";
import { useRouter } from "next/navigation";
import '@mantine/dates/styles.css'

/**
 * Fungsi menampilkan halaman emotion.
 * @returns  Hasil dari emotion menampilakan fitur dan button download dan copy.
 */
export default function Emotion() {
  const [proccess, setProccess] = useState(false);
  const router = useRouter()
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
                  placeholder="CANDIDATE"
                  data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
                />
                <DateInput valueFormat="YYYY MMM DD" placeholder="SELECT DATE" />
                <Button bg={"gray"} onClick={() => setProccess(true)}>
                  PROCCESS
                </Button>
              </Stack>
            </Paper>
          </Box>
          <Box>
            <Paper shadow="xs" p={30}>
              <Box
                style={{
                  borderRadius: 10,
                  padding: 10,
                }}
              >
                <UploadData />
              </Box>
            </Paper>
            {proccess && (
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
                    onClick={() => router.push("/dashboard/copy-data")}
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
      {proccess && (
        <Box pt={20}>
          <TableData />
        </Box>
      )}
    </>
  );
}
