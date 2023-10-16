
"use client"
import React from "react";
import Public from "../components/table_public";
import {
  Box,
  Button,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import UploadPublic from "../components/upload_public";
import TablePublic from "../components/table_public";
import { useRouter } from "next/navigation";

/**
 * Fungsi untuk menampilkan table list public.
 * @param {string} title - Judul table.
 * @returns {component} Table list Public sesuai dengan parameter.
 */
function ViewPublic({ title }: { title: string }) {
  const router = useRouter()
  return (
    <>
      <Stack>
        <Text fw={"bold"}>PUBLIC CONCERNS TRENDS</Text>
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
                  onClick={() => router.push('public-concern-trend?prov=bali')}
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
            <UploadPublic />
            <Box
              style={{
                border: "1px dashed gray",
                borderRadius: 10,
                padding: 40,
                cursor: "pointer",
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
          <TablePublic />
        </Box>
      )}
    </>
  );
}

export default ViewPublic;
