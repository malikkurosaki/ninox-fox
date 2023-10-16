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
import { useRouter } from "next/navigation";
import UploadData from "../components/upload_data";
import TableData from "../components/table_data";


/**
 * Fungsi untuk menampilkan table list Emotion.
 * @param {string} title - Judul table.
 * @returns {component} Table list Emotion sesuai dengan parameter.
 */
export default function ViewBackEmotion({ title }: { title: string }) {
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
                  placeholder="CANDIDATE"
                  data={["I WAYAN KADEK", "I KETUT SURYA", "KOMANG ADI"]}
                  required
                  label={"Candidate"}
                  searchable
                />
                <DateInput valueFormat="YYYY MMM DD" required
                  label={"Select Date"} placeholder="SELECT DATE" />
                <Button bg={"gray"}  onClick={() => router.push('emotion?prov=bali')}>
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
            {title && (
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
      {title && (
        <Box pt={20}>
          <TableData />
        </Box>
      )}
    </>
  );
}

// export default function ViewBackEmotion() {
