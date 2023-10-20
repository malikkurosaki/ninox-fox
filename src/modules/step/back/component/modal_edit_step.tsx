'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalStep } from "../val/val_step";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funEditStep from "../fun/fun_edit_step";

/**
 * Fungsi untuk menampilkan modal konfirmasi edit step.
 * @returns {component} Modal konfirmasi edit step.
 */

export default function ModalEditStep({data}: {data : any}) {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const router = useRouter()

    async function onEditStep() {
        const edit = await funEditStep({body: data})
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO EDIT STEP?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onEditStep()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}