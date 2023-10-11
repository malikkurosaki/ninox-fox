"use client";

import { ButtonBack } from "@/modules/_global";
import {
  Box,
  Button,
  Center,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useState } from "react";
import "@mantine/dates/styles.css";
import { useAtom } from "jotai";
import { isModalPopularity } from "../val/val_modal_popularity";

export default function CopyDataPopularity() {
  const [value, setValue] = useState<Date | null>(null);
  const [openModal, setOpenModal] = useAtom(isModalPopularity);

  return (
    <>
      <Stack>
        <ButtonBack to="/dashboard/popularity" />
        <Text fw={"bold"} fz={25}>
          {" "}
          COPY DATA
        </Text>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 50,
            borderRadius: 10,
          }}
        >
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
                        bg={"white"}
                        c={"dark"}
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
        </Box>
      </Box>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        
      </Modal>
    </>
  );
}
