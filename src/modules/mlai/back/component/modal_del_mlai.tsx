'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import funDeleteMlAi from "../fun/fun_delete_mlai"

/**
 * Fungsi untuk menampilkan modal konfirmasi delete ml ai.
 * @returns {component} modal konfirmasi delete ml ai.
 */

export default function ModalDelMlAi({ id, onSuccess }: { id: any, onSuccess: (val: any) => void }) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const router = useRouter()

    async function onDelMlAi() {
        const delData = await funDeleteMlAi({ id: id })
        if (!delData.success) return toast(delData.message, { theme: "dark" })
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        onSuccess(true)
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGHAPUS ML-AI?
                    </Text>
                    <Group justify="space-between" pt={10}>
                        <Button
                            radius={10}
                            color="gray.7"
                            w={150}
                            onClick={() => setOpenModal(false)}
                        >
                            TIDAK
                        </Button>
                        <Button radius={10} color="gray.7" w={150} onClick={() => onDelMlAi()}>
                            YA
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}