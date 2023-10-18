'use client'

import { ActionIcon, Box, Button, Center, Group, Image, Modal, Paper, ScrollArea, Stack, Switch, Table, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { useRouter, useSearchParams } from "next/navigation";
import { MdDelete, MdEditCalendar, MdOutlineModeEdit } from "react-icons/md";
import { isModalCandidate } from "../val/isModalCandidate";
import ModalDelCandidate from "./modal_del_candidate";
import { useEffect, useState } from "react";
import { funGetCandidateByArea } from "../..";

/**
 * Fungsi untuk menampilkan table list kandidat.
 * @param {string} title - Judul table.
 * @param {any[]} data - data table.
 * @returns {component} Table list candidate sesuai dengan parameter.
 */

export default function TableCandidate({ title, data, searchParam }: { title: string, data: any[], searchParam: any }) {

  const [openModal, setOpenModal] = useAtom(isModalCandidate)
  const [isDataDel, setDataDel] = useState({
    idCandidate: "",
    active: false
  })

  const [isData, setData] = useState(data)

  const router = useRouter();
  const searchParams = useSearchParams()

  async function onLoad() {
    const dataDB = await funGetCandidateByArea({ find: searchParam });
    setData(dataDB.data)
  }

  useEffect(() => {
    setData(data)
  }, [data])



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
            <Text fw={"bold"} c={"white"}>{title}</Text>
            <Button bg={"gray"} onClick={() => router.push('candidate/add?prov=' + searchParams.get('prov') + '&city=' + searchParams.get('city'))}>ADD CANDIDATE</Button>
          </Group>
          <Box pt={20}>
            <Box style={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10
            }}>

              <ScrollArea>
                <Table withTableBorder horizontalSpacing="xl" >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>No</Table.Th>
                      <Table.Th>Name</Table.Th>
                      <Table.Th>Image</Table.Th>
                      <Table.Th>Status</Table.Th>
                      <Table.Th>Action</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {isData.map((v: any, i: any) => (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{v.name}</Table.Td>
                        <Table.Td>
                          <Image
                            src={"/profile.png"}
                            radius={100}
                            maw={{ base: 50, sm: 50 }}
                            alt="img"
                          />
                        </Table.Td>
                        <Table.Td>
                          <Switch checked={v.isActive} size="md" onLabel="ON" offLabel="OFF" onChange={(val) => {
                            setOpenModal(true)
                            setDataDel({
                              ...isDataDel,
                              idCandidate: v.id,
                              active: val.currentTarget.checked
                            })
                          }} />
                        </Table.Td>
                        <Table.Td>
                          <ActionIcon
                            variant="transparent"
                            color="rgba(5, 128, 23, 1)"
                            size="xl"
                            aria-label="Edit"
                            onClick={() => router.push('candidate/edit/'+v.id)}
                          >
                            <MdEditCalendar size={20} />
                          </ActionIcon>
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
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalDelCandidate data={isDataDel} onSuccess={(val) => {
          if (val) return onLoad();
        }} />
      </Modal>
    </>
  )
}