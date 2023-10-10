import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { isModalEmotion } from "../../val/val_emotion";
import 'react-simple-toasts/dist/theme/dark.css'

/**
 * Fungsi untuk menampilkan modal emotion.
 * @returns  Hasilnya angkan menampilakn pilihan button yes or no.
 */
export default function ModalEmotion() {
  const [valOpenModal, setOpenModal] = useAtom(isModalEmotion);
  const router = useRouter()

  async function onCopy() {
    router.push("/dashboard")
    toast("COPY DATA  SUCCESS", {theme: "dark"});
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO COPY DATA?
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
            <Button radius={10} color="gray.7" w={150} onClick={onCopy}>
              YES
            </Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}
