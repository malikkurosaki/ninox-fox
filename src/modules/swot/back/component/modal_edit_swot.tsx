'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalSwot } from "../val/val_swot";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funEditSwot from "../fun/fun_edit_swot";

/**
 * Fungsi untuk menampilkan modal konfirmasi edit swot.
 * @returns {component} Modal konfirmasi edit swot.
 */

export default function ModalEditSwot({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalSwot)
    const router = useRouter()

    async function onEditSwot() {
        const edit = await funEditSwot({body: data})
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGEDIT  SWOT?
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