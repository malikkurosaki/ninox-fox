'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import { isModalRoleUser } from "../val/val_role_user"

/**
 * Fungsi untuk menampilkan modal konfirmasi Edit Role User.
 * @returns {component} modal konfirmasi Edit Role User.
 */

export default function ModalEditRoleUser() {
    const [openModal, setOpenModal] = useAtom(isModalRoleUser)
    const router = useRouter()

    function onRoleUser() {
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }


    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGEDIT  ROLE USER?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onRoleUser()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}
