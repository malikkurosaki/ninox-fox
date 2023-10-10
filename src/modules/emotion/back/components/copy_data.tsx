"use client";
import { ButtonBack } from "@/modules/_global";
import {
  Box,
  Button,
  Center,
  Group,
  Image,
  Modal,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { isModalEmotion } from "../val/val_emotion";
import ModalEmotion from "./modal/modal_emotion";

/**
 * Fungsi Untuk menampilkan halaman copy data.
 * @returns Hasilnya menampilkan tanggal dan button untuk proccess copy data.
 */

export default function CopyData() {
  const [value, setValue] = useState<Date | null>(null);
  const [openModal, setOpenModal] = useAtom(isModalEmotion);
  return (
    <>
      <Stack>
        <ButtonBack to="/dashboard" />
        <Text fw={"bold"} fz={25}>
          {" "}
          COPY DATA
        </Text>
      </Stack>
      <Box pt={10}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <Box>
            <Box
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Box>
                <Box
                  style={{
                    backgroundColor: "#EAEAEA",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text>BALI</Text>
                </Box>
              </Box>
              <Box pt={20}>
                <Box
                  style={{
                    backgroundColor: "#EAEAEA",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text>BADUNG</Text>
                </Box>
              </Box>
              <Box pt={20}>
                <Box
                  style={{
                    backgroundColor: "#EAEAEA",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text>KADEK WAYAN MERTA</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              style={{
                backgroundColor: "gray",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Center>
                <Image
                  radius="md"
                  h={175}
                  w="auto"
                  alt="candidate"
                  fit="contain"
                  src="../../../../profile.png"
                />
              </Center>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: "xl" }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          <Box pt={40}>
            <Center>
              <Box>
                <Text fw={"bold"} fz={20}>
                  FROM
                </Text>
                <Image
                  radius="md"
                  h={400}
                  w="auto"
                  alt="candidate"
                  fit="contain"
                  src="../../../../tgl-coba.png"
                />
              </Box>
            </Center>
          </Box>
          <Box pt={40}>
            <Center>
              <Box>
                <Text fw={"bold"} fz={20}>
                  TO
                </Text>
                <Image
                  radius="md"
                  h={400}
                  w="auto"
                  alt="candidate"
                  fit="contain"
                  src="../../../../tgl-coba.png"
                />
                <Group justify="flex-end">
                  <Button
                    mt={20}
                    bg={"gray"}
                    onClick={() => setOpenModal(true)}
                  >
                    PROCCESS
                  </Button>
                </Group>
              </Box>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>

      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalEmotion/>
      </Modal>
    </>
  );
}
