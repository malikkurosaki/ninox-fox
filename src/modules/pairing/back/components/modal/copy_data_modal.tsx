'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { isModalPairing } from "../../val/val_modal_pairing";
import funCopyPairing from "../../fun/copy_pairing";
import { funGetAccessArea } from "@/modules/_global";


/**
 * Fungsi menampilkan modal.
 * @returns  Hasil dari Copy data modal untuk menampilkan allert yes or no
 */
export default function ModalCopy({ from, to, candidate1, candidate2, onSuccess }: { from: any, to: any, candidate1: any, candidate2: any, onSuccess: (val: any) => void }) {
  const [openModal, setOpenModal] = useAtom(isModalPairing);
  const [isLoading, setLoading] = useState(false)

  async function onUpload() {
    const cek = await funGetAccessArea({ candidate: candidate1 })
    if (!cek) {
        setOpenModal(false)
        return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
    }
    setLoading(true)
    await funCopyPairing({ dateFrom: from, dateTo: to, candidate1: candidate1, candidate2: candidate2})
    // await funLogUser({ act: "COPY DATA", desc: `User Copy Emotion Candidate (Candidate ID : ${candidate}, From ${from} To ${to})` })
    setLoading(false)
    toast('Success', { theme: 'dark' })
    setOpenModal(false)
    onSuccess(true)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ANDA YAKIN INGIN MENGCOPY DATA PAIRING?
          </Text>
          <Group justify="space-between" pt={10}>
            <Button
              radius={10}
              color="gray.7"
              w={150}
              onClick={() => setOpenModal(false)}
            >
              NO
            </Button>
            <Button loading={isLoading} radius={10} color="gray.7" w={150} onClick={() => onUpload()}>
              YES
            </Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}