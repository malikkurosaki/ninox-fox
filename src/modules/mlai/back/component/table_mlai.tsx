"use client";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Collapse,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import {
  MdArrowCircleDown,
  MdArrowCircleUp,
  MdDelete,
  MdEditCalendar,
} from "react-icons/md";
import { isModalMlAi } from "../val/val_mlai";
import ModalDelMlAi from "./modal_del_mlai";
import { CiRead } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

/**
 * Fungsi untuk menampilkan table ml ai.
 * @returns {component} table & pagination ml ai.
 */

export default function TableMlAi() {
  const [openModal, setOpenModal] = useAtom(isModalMlAi);
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const elements = [
    {
      no: 1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Komang Ayu",
    },
    {
      no: 2,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Kadek Agung",
    },
    {
      no: 3,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "I Wayan Merta",
    },
    {
      no: 4,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Surya Diningrat",
    },
    {
      no: 5,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "I Komang Nuri",
    },
  ];

  return (
    <>
      <Box mt={30}>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Group justify="space-between" gap="lg">
            <Text fw={"bold"} c={"white"}>
              {"PROVINSI BALI"}
            </Text>
            <Button bg={"gray"} onClick={() => router.push("ml-ai/add")}>
              ADD MLAI
            </Button>
          </Group>
          <Box pt={20}>
            <Box
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <ScrollArea>
                <Table
                  withTableBorder
                  withRowBorders={false}
                  horizontalSpacing="xl"
                >
                  <Table.Thead>
                    <Table.Tr
                      style={{
                        borderBottom: "1px solid #CED4D9",
                      }}
                    >
                      <Table.Th>No</Table.Th>
                      <Table.Th w={200}>Candidate</Table.Th>
                      <Table.Th>
                        <Center>Action</Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {elements.map((v, i) => (
                    <Table.Tbody key={i}>
                      <Table.Tr>
                        <Table.Td>{v.no}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>
                          <Center>
                            <ActionIcon
                              variant="transparent"
                              color="rgba(5, 128, 23, 1)"
                              size="xl"
                              aria-label="Edit"
                              onClick={toggle}
                            >
                              <CiRead size={20} />
                            </ActionIcon>
                            <ActionIcon
                              variant="transparent"
                              color="rgba(5, 128, 23, 1)"
                              size="xl"
                              aria-label="Edit"
                              onClick={() =>
                                router.push("ml-ai/edit/IKomangAyu")
                              }
                            >
                              <MdEditCalendar size={20} />
                            </ActionIcon>
                            <ActionIcon
                              variant="transparent"
                              color="rgba(209, 4, 4, 1)"
                              size="xl"
                              aria-label="Delete"
                              onClick={() => setOpenModal(true)}
                            >
                              <MdDelete size={20} />
                            </ActionIcon>
                          </Center>
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr
                        style={{
                          borderBottom: "1px solid #CED4D9",
                        }}
                      >
                        <Table.Td colSpan={5}>
                          <ClickMore v={v} />
                        </Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  ))}
                </Table>
              </ScrollArea>
              <Group justify="flex-end" mt={20}>
                <Pagination total={10} />
              </Group>
            </Box>
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
        <ModalDelMlAi />
      </Modal>
    </>
  );
}

function ClickMore({ v }: { v: any }) {
  const open = useState(false);

  return (
    <>
      <Stack>
      <Group>
          <ActionIcon onClick={() => open[1](!open[0])}>
            {open[0] ? <MdArrowCircleDown /> : <MdArrowCircleUp />}
          </ActionIcon>
        </Group>
        <Collapse
          in={open[0]}
          transitionDuration={500}
          transitionTimingFunction="linear"
        >
          <Box
            style={{
              backgroundColor: "gray",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text c={"white"} fw={"bold"} fz={20} mb={10}>
              Content
            </Text>
            <Text c={"white"}>{v.content}</Text>
          </Box>
        </Collapse>
      </Stack>
    </>
  );
}
