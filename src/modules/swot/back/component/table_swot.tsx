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
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { isModalSwot } from "../val/val_swot";
import ModalDelSwot from "./modal_del_swot";
import { CiRead, CiUnread } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import ComponentTable from "./component_table";

/**
 * Fungsi untuk menampilkan view table swot.
 * @returns {component} table swot.
 */

export default function TableSwot() {
  const open = useState(false)
  const [openModal, setOpenModal] = useAtom(isModalSwot);
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const elements = [
    {
      no: 1,
      category: "Strength",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Komang Ayu",
    },
    {
      no: 2,
      category: "Weakness",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Kadek Agung",
    },
    {
      no: 3,
      category: "Opportunity",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "I Wayan Merta",
    },
    {
      no: 4,
      category: "Strength",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      name: "Surya Diningrat",
    },
    {
      no: 5,
      category: "Threat",
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
            <Button bg={"gray"} onClick={() => router.push("swot/add")}>
              ADD SWOT
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
                      <Table.Th>Category</Table.Th>
                      {/* <Table.Th>Content</Table.Th> */}
                      <Table.Th w={180}>
                        <Center>Action</Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {elements.map((v, i) => (
                    <ComponentTable v={v} i={i} key={i} />
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
        <ModalDelSwot />
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
