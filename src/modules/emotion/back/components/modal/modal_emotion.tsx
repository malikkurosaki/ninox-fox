'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { isModalEmotion } from "../../val/val_emotion";
import funCopyEmotion from "../../fun/copy_emotion";
import { funGetAccessArea } from "@/modules/_global";

/**
 * Fungsi menampilkan modal.
 * @returns  Hasil dari Copy data modal untuk menampilkan allert yes or no
 */

export default function ModalCopyEmotion({ from, to, candidate, onSuccess }: { from: any, to: any, candidate: any, onSuccess: (val: any) => void }) {
  const [openModal, setOpenModal] = useAtom(isModalEmotion);
  const [isLoading, setLoading] = useState(false)

  async function onUpload() {
    const cek = await funGetAccessArea({ candidate: candidate })
    if (!cek) {
        setOpenModal(false)
        return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
    }
    setLoading(true)
    await funCopyEmotion({ dateFrom: from, dateTo: to, candidate: candidate })
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
            ANDA YAKIN INGIN MENGCOPY DATA EMOTION CANDIDATE?
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