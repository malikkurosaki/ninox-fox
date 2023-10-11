import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalPopularity } from "../../val/val_modal_popularity";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import 'react-simple-toasts/dist/theme/dark.css'


/**
 * Fungsi menampilkan modal copy data.
 * @returns  Hasil dari copy data untuk menampilkan allert modal untuk yes or no.
 */
export default function CopyDataModal() {
  const [openModal, setOpenModal] = useAtom(isModalPopularity);
  const router = useRouter();

  async function onCopy() {
    router.push("/dashboard/popularity");
    toast("COPY DATA  SUCCESS", { theme: "dark" });
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
