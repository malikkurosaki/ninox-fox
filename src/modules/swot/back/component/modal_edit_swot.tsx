'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalSwot } from "../val/val_swot";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";

/**
 * Fungsi untuk menampilkan modal konfirmasi edit swot.
 * @returns {component} Modal konfirmasi edit swot.
 */

export default function ModalEditSwot() {
    const [openModal, setOpenModal] = useAtom(isModalSwot)
    const router = useRouter()

    function onEditSwot() {
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO EDIT SWOT?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onEditSwot()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}