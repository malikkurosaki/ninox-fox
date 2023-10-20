'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalSwot } from "../val/val_swot";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funDeleteSwot from "../fun/fun_delete_swot";

/**
 * Fungsi untuk menampilkan modal konfirmasi delete swot.
 * @returns {component} Modal konfirmasi delete swot.
 */

export default function ModalDelSwot({id, onSuccess}: {id: any, onSuccess: (val: any) => void}) {
    const [openModal, setOpenModal] = useAtom(isModalSwot)
    const router = useRouter()

    async function onDelSwot() {
        const delData = await funDeleteSwot({id: id})
        if (!delData.success) return toast(delData.message, { theme: "dark" })
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(true)
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO DELETE SWOT?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onDelSwot()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}