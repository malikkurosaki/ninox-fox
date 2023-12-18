import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isModalEmotion } from '../../val/val_emotion';
import funDelCandidate from '../../fun/delete_candidate';
import toast from 'react-simple-toasts';
import { Alert, Box, Button, Group, Text } from '@mantine/core';

export default function ModalDeleteCandidate({ isCandidate, isDateCan, onSuccess }: { isCandidate: any, isDateCan: any, onSuccess: (val: any) => void }) {

  const [openModal, setOpenModal] = useAtom(isModalEmotion);
  const [isLoading, setLoading] = useState(false)

  async function delDataCan() {
    setLoading(true)
    await funDelCandidate({ candidate: isCandidate, dateCan: isDateCan })
    setLoading(false)
    onSuccess(true)
    toast("Success", { theme: "dark" });
    console.log(isCandidate)
    console.log(isDateCan)
    setOpenModal(false)
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ANDA YAKIN INGIN MENGHAPUS DATA CANDIDATE?
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
            <Button loading={isLoading} radius={10} color="gray.7" w={150} onClick={() => delDataCan()}>
              YES
            </Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}

