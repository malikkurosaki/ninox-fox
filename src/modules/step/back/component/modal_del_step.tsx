'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalStep } from "../val/val_step";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funDeleteStep from "../fun/fun_delete_step";


/**
 * Fungsi untuk menampilkan modal konfirmasi delete step.
 * @returns {component} Modal konfirmasi delete step.
 */

export default function ModalDelStep({id}: {id: any}) {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const router = useRouter()

   async function onDelStep() {
        const delData = await funDeleteStep({id: id})
        if (!delData.success) return toast(delData.message, { theme: "dark" })
        toast("Success", { theme: "dark" });
        setOpenModal(false);
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO DELETE STEP?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onDelStep()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}