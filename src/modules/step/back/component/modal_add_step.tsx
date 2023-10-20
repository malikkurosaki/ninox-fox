'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalStep } from "../val/val_step";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funAddStep from "../fun/fun_add_step";

/**
 * Fungsi untuk menampilkan modal konfirmasi add step.
 * @returns {component} Modal konfirmasi add step.
 */

export default function ModalAddStep({data}: {data: any}) {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const router = useRouter()

   async function onCreateStep() {
        const addData = await funAddStep({body: data})
        if (!addData.success) return  toast(addData.message, { theme: "dark" });
        toast("Success", {theme: "dark"});
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO ADD STEP?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onCreateStep()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}