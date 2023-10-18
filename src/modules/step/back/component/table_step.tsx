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
import { useRouter, useSearchParams } from "next/navigation";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import ModalDelStep from "./modal_del_step";
import { useDisclosure } from "@mantine/hooks";
import ComponentTableStep from "./component_table_step";
import { useEffect, useState } from "react";
import { funGetCandidateActiveByArea } from "@/modules/candidate";

/**
 * Fungsi untuk menampilkan view table step.
 * @returns {component} table step.
 */

export default function TableStep({ title, data, searchParam }: { title: any, data: any, searchParam: any }) {
  const [openModal, setOpenModal] = useAtom(isModalStep);
  const router = useRouter();
 
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
            <Button bg={"gray"} onClick={() => router.push("step/add?prov=" + searchParams.get('prov') + '&city=' + searchParams.get('city'))}>
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
                  {isData.map((v: any, i: any) => (
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
