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
import { useRouter, useSearchParams } from "next/navigation";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { isModalSwot } from "../val/val_swot";
import ModalDelSwot from "./modal_del_swot";
import { CiRead, CiUnread } from "react-icons/ci";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import ComponentTable from "./component_table";
import { funGetCandidateActiveByArea } from "@/modules/candidate";

/**
 * Fungsi untuk menampilkan view table swot.
 * @returns {component} table swot.
 */

export default function TableSwot({ title, data, searchParam }: { title: any, data: any, searchParam: any }) {
  const [openModal, setOpenModal] = useAtom(isModalSwot);
  const router = useRouter();
  const [dataDelete, setDataDelete] = useState(Number)


  const [isData, setData] = useState(data)
  const searchParams = useSearchParams()

  async function onLoad() {
    const dataDB = await funGetCandidateActiveByArea({ find: searchParam })
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
            <Text fw={"bold"} c={"white"}>
              {title}
            </Text>
            <Button bg={"gray"} onClick={() => router.push("swot/add?prov=" + searchParams.get('prov') + '&city=' + searchParams.get('city'))}>
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
                      <Table.Th w={180}>
                        <Center>Action</Center>
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  {isData.map((v: any, i: any) => (
                    <ComponentTable v={v} i={i} key={i} onClick={(val)=>{
                      setDataDelete(val)
                      setOpenModal(true)
                    }} />
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
        <ModalDelSwot id={dataDelete}/>
      </Modal>
    </>
  );
}