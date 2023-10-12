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
                    <Table.Tbody key={i}>
                      <Table.Tr>
                        <Table.Td>{v.no}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.category}</Table.Td>
                        <Table.Td>{v.sentiment}</Table.Td>
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
                                router.push("step/edit/IKomangAyu")
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
                          <Collapse
                            in={opened}
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
                              <Text c={"white"}>{v.value}</Text>
                            </Box>
                          </Collapse>
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
        <ModalDelStep />
      </Modal>
    </>
  );
}
