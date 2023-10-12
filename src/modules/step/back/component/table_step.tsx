"use client";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Collapse,
  Divider,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import { useAtom } from "jotai";
import { isModalStep } from "../val/val_step";
import { useRouter } from "next/navigation";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import ModalDelStep from "./modal_del_step";
import { useDisclosure } from "@mantine/hooks";
import ComponentTableStep from "./component_table_step";

/**
 * Fungsi untuk menampilkan view table step.
 * @returns {component} table step.
 */

export default function TableStep() {
  const [openModal, setOpenModal] = useAtom(isModalStep);
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const elements = [
    {
      no: 1,
      sentiment: "Positive",
      category: "Social",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      name: "Komang Ayu",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      no: 2,
      sentiment: "Positive",
      category: "Politic",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      name: "Kadek Agung",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      no: 3,
      sentiment: "Negative",
      category: "Economy",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      name: "I Wayan Merta",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      no: 4,
      sentiment: "Positive",
      category: "Technology",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      name: "Surya Diningrat",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      no: 5,
      sentiment: "Negative",
      category: "Social",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      name: "I Komang Nuri",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
  ];

  let a = 3;

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
            <Button bg={"gray"} onClick={() => router.push("step/add")}>
              ADD STEP
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
                      <Table.Th>Sentiment</Table.Th>
                      <Table.Th>
                        <Center>Action</Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {elements.map((v, i) => (
                    <ComponentTableStep v={v} i={i} key={i} />
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
        <ModalDelStep />
      </Modal>
    </>
  );
}
