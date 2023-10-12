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
import { isModalPairing } from "../val/val_modal_pairing";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import ModalCopy from "../components/modal/copy_data_modal";

/**
 * Fungsi Untuk menampilkan halaman copy data.
 * @returns Hasilnya menampilkan tanggal dan button untuk proccess copy data.
 */

export default function ViewCopyDataPairing() {
  const [value, setValue] = useState<Date | null>(null);
  const [openModal, setOpenModal] = useAtom(isModalPairing);
  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"} fz={25}>
          {" "}
          COPY DATA
        </Text>
      </Stack>

      <Box pt={10}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <Box pt={25}>

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
            </Box>
            <Box>
              <Box>
                <Group justify="space-around">
                  <Box
                    style={{
                      border: "1px dashed gray",
                      padding: 5,
                      borderRadius: 10
                    }}
                    pl={20}
                    pr={20}
                  >
                    <Image
                      radius="md"
                      h={130}
                      w="auto"
                      alt="candidate"
                      fit="contain"
                      src="/profile.png"
                    />
                    <Text ta={"center"} fw={"bold"}>I WAYAN KADEK</Text>
                  </Box>
                  <Box
                    style={{
                      border: "1px dashed gray",
                      padding: 5,
                      borderRadius: 10
                    }}
                    pl={20}
                    pr={20}
                  >
                    <Image
                      radius="md"
                      h={130}
                      w="auto"
                      alt="candidate"
                      fit="contain"
                      src="/profile.png"
                    />
                    <Text ta={"center"} fw={"bold"}>I NYOMAN SURYA</Text>
                  </Box>
                </Group>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
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
                <Box
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <DatePicker value={value} onChange={setValue} />
                </Box>
              </Box>
            </Center>
          </Box>
          <Box pt={40}>
            <Center>
              <Box>
                <Text fw={"bold"} fz={20}>
                  TO
                </Text>
                <Box
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <DatePicker value={value} onChange={setValue} />
                </Box>
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
        <ModalCopy/>
      </Modal>
    </>
  );
}


