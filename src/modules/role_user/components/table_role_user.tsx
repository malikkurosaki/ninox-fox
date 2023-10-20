"use client";

import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";


// /**
//  * Fungsi untuk menampilkan table ml ai.
//  * @returns {component} table & pagination ml ai.
//  */

export default function TableRoleUser() {
  const router = useRouter();
  // const [opened, { toggle }] = useDisclosure(false);
  const elements = [
    {
      id: 1,
      conponent: "emotion",
      name: "admin",
      status: "active"
    },
    {
      id: 2,
      conponent: "emotion",
      name: "admin",
      status: "active"
    },
    {
      id: 3,
      conponent: "emotion",
      name: "admin",
      status: "active"
    },
  ];

  return (
    <>
      <Box mt={20}>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 20,
            borderRadius: 10,
          }}
        >
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
                      <Table.Th>Nama</Table.Th>
                      <Table.Th>Components</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>
                        <Center>
                          Action
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {elements.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{v.id}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.conponent}</Table.Td>
                        <Table.Td>{v.status}</Table.Td>
                        <Table.Td>
                          <Group justify="center">
                            <Box>
                              <ActionIcon
                              variant="transparent" aria-label="Settings"
                                color="yellow.9"
                                onClick={() =>
                                  router.push(
                                    `/dashboard/role-user/edit/${v.id}`
                                  )
                                }
                              >
                                <MdOutlineModeEdit size="23" />
                              </ActionIcon>
                            </Box>
                          </Group>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </ScrollArea>
              <Group justify="flex-end" mt={20}>
                <Pagination total={10} />
              </Group>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}



