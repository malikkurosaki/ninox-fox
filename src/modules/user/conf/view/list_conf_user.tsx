"use client"
import { ActionIcon, Box, Button, Center, Group, Modal, Pill, ScrollArea, Table, Text, UnstyledButton } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { MdDelete, MdOutlineModeEdit } from 'react-icons/md';
import { funGetAllConfUser } from '..';
import { useAtom } from 'jotai';
import { isModalConf } from '../val/isModalConf';
import ModalDeleteConfUser from '../components/modal_delete_conf_user';

export default function ListConfUser({ data }: { data: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalConf)
  const [isData, setData] = useState<any[]>(data)
  const router = useRouter()
  const [dataDelete, setDataDelete] = useState("")

  async function delDataUser() {
    const newData = await funGetAllConfUser()
    setData(newData)
  }
  return (
    <>
      <Text fw={"bold"}>USER</Text>
      <Group justify='flex-end'>
        <Button onClick={() => router.push("/dashboard/user/add")}>Add User</Button>
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
                  // withRowBorders={false}
                  horizontalSpacing="xl"
                >
                  <Table.Thead>
                    <Table.Tr
                      style={{
                        borderBottom: "1px solid #CED4D9",
                      }}
                    >
                      <Table.Th>No</Table.Th>
                      <Table.Th>Role User</Table.Th>
                      <Table.Th >Name</Table.Th>
                      <Table.Th>Email</Table.Th>
                      <Table.Th>Password</Table.Th>
                      <Table.Th>Phone</Table.Th>
                      <Table.Th>Area Provinsi</Table.Th>
                      <Table.Th>
                        <Center>
                          Action
                        </Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {isData.map((v, i) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.UserRole.name}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>{v.email}</Table.Td>
                        <Table.Td>{v.password}</Table.Td>
                        <Table.Td>{v.phone}</Table.Td>
                        <Table.Td>
                          {v.UserArea.map((v: any, i: any) => (
                            <Box key={i.idProvinsi}>
                              <Button color={(v.isFront == true) ? 'red' : 'blue'} size="lg" mb={10}>{v.area}</Button>
                            </Box>
                          ))}

                        </Table.Td>
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
                                    `/dashboard/user/edit/${v.id}`
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
      <Modal
        size={"md"}
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalDeleteConfUser id={dataDelete}
          onSuccess={(val) => {
            delDataUser()
          }} />
      </Modal>
    </>
  );
}
