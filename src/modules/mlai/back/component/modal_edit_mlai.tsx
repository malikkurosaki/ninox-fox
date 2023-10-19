'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import funEditMlAi from "../fun/fun_edit_mlai"

/**
 * Fungsi untuk menampilkan modal konfirmasi edit ml ai.
 * @returns {component} modal konfirmasi edit ml ai.
 */

export default function ModalEditMlAi({data}: {data: any}) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const router = useRouter()

    async function onEditMlAi() {
        const edit = await funEditMlAi({body: data})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO EDIT ML-AI?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onEditMlAi()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}