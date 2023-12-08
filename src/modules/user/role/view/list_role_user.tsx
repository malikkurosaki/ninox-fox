"use client"
import { ActionIcon, Box, Button, Center, Group, Modal, ScrollArea, Table, Text } from '@mantine/core';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { isModalRoleUser } from '../val/val_role_user';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import funGetAllUserRole from '../fun/get_all_role';
import ModalDelRoleUser from '../components/modal_del_role_user';


/**
 * Fungsi untuk list role user.
 * @returns {Component} hasil untuk menampilkan list role user
 */
export default function ListRoleUser({ data }: { data: any }) {
  const router = useRouter()
  const [valOpenModal, setOpenModal] = useAtom(isModalRoleUser)
  const [isRole, setRole] = useState<any[]>(data)
  const [dataDelete, setDataDelete] = useState("")

  async function delroledata() {
    const newData = await funGetAllUserRole()
    setRole(newData)
  }

  return (
    <>
      <Text fw={"bold"}>ROLE USER</Text>
      <Box>
        <Group justify='flex-end'>
          <Button bg={"gray"} onClick={() => router.push("/dashboard/role-user/add")} >ADD ROLE USER</Button>
        </Group>
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
                        <Table.Th>Name</Table.Th>
                        <Table.Th>
                          <Center>
                            Action
                          </Center>
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {isRole.map((v, i) => (
                        <Table.Tr key={i}>
                          <Table.Td>{i + 1}</Table.Td>
                          <Table.Td>{v.name}</Table.Td>
                          <Table.Td>
                            <Group justify="center">
                              <Box>
                                <ActionIcon
                                  color="red.9"
                                  onClick={() => {
                                    setDataDelete(v.id)
                                    setOpenModal(true)
                                  }}
                                  variant='subtle'
                                >
                                  <MdDelete size="23" />
                                </ActionIcon>
                              </Box>
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalDelRoleUser id={dataDelete}
          onSuccess={(val) => {
            delroledata()
          }} />
      </Modal>
    </>
  );
}

