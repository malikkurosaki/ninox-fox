"use client";

import {
  Box,
  Center,
  Container,
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

export default function Emotion() {
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
                <DateInput valueFormat="YYYY MMM DD" placeholder="Date input" />
              </Stack>
            </Paper>
          </Box>
          <Box>
            <Paper shadow="xs" p="xl">
              <Box
                style={{
                  backgroundColor: "gray",
                  padding: 30,
                  borderRadius: 10,
                }}
              >
                <Center>
                  <UnstyledButton>UPLOAD DATA</UnstyledButton>
                </Center>
              </Box>
            </Paper>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
