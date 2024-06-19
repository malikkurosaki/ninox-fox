"use client";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ActionIcon,
  Box,
  Center,
  Collapse,
  Group,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { CiRead, CiUnread } from "react-icons/ci";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { isModalValue } from "../val/val_swot";

export default function ComponentTable({ v, i, onClick }: { v: any; i: any, onClick: (val: any) => void }) {
  const open = useState(false);
  const router = useRouter();
  const [openModal, setOpenModal] = useAtom(isModalValue);

  function callBackDelete({ idDel }: { idDel: any }) {
    onClick(idDel)
  }

  return (
    <>
      <Table.Tbody key={i}>
        <Table.Tr>
          <Table.Td>{i + 1}</Table.Td>
          <Table.Td>{v.name}</Table.Td>
          <Table.Td>{v.category}</Table.Td>
          <Table.Td>
            <Center>
              <Stack>
                <Group>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(5, 128, 23, 1)"
                    size="xl"
                    aria-label="Edit"
                    onClick={() => open[1](!open[0])}
                  >
                    {open[0] ? <CiRead size={20} /> : <CiUnread size={20} />}
                  </ActionIcon>
                </Group>
              </Stack>
              <ActionIcon
                variant="transparent"
                color="rgba(5, 128, 23, 1)"
                size="xl"
                aria-label="Edit"
                onClick={() => router.push("swot/edit/" + v.id)}
              >
                <MdEditCalendar size={20} />
              </ActionIcon>
              <ActionIcon
                variant="transparent"
                color="rgba(209, 4, 4, 1)"
                size="xl"
                aria-label="Delete"
                onClick={(val) => {
                  callBackDelete({ idDel: v.id })
                }}
              >
                <MdDelete size={20} />
              </ActionIcon>
            </Center>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td colSpan={5}>
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
                  Konten
                </Text>
                <Stack c={'white'}>
                  <Box dangerouslySetInnerHTML={{ __html: v.content }} />
                </Stack>
              </Box>
            </Collapse>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </>
  );
}

