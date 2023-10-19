'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi, isModalMlaiAdd } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import funAddMlAi from "../fun/fun_add_mlai"

/**
 * Fungsi untuk menampilkan modal konfirmasi add ml ai.
 * @returns {component} modal konfirmasi add ml ai.
 */

export default function ModalAddMlAi({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalMlaiAdd)
    const router = useRouter()

    async function onCreateMlAi() {
        const addData = await funAddMlAi({ body: data })
        if (!addData.success) return  toast(addData.message, { theme: "dark" });
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }


    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO ADD ML-AI?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onCreateMlAi()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}