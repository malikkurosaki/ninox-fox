'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"

/**
 * Fungsi untuk menampilkan modal konfirmasi delete ml ai.
 * @returns {component} modal konfirmasi delete ml ai.
 */

export default function ModalDelMlAi() {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const router = useRouter()

    function onDelMlAi() {
        toast("Success", { theme: "dark" });
        setOpenModal(false);
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO DELETE ML-AI?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onDelMlAi()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}