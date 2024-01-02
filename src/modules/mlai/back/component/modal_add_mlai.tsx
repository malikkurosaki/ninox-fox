'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import funAddMlAi from "../fun/fun_add_mlai"
import { funGetAccessArea } from "@/modules/_global"

/**
 * Fungsi untuk menampilkan modal konfirmasi add ml ai.
 * @returns {component} modal konfirmasi add ml ai.
 */

export default function ModalAddMlAi({ candidate, text }: { candidate: any, text: any }) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const router = useRouter()

    async function onCreateMlAi() {
        const cek = await funGetAccessArea({ candidate: candidate })
        if (!cek) {
            setOpenModal(false)
            return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
        }
        const addData = await funAddMlAi({ candidate: candidate, content: text })
        if (!addData.success) return toast(addData.message, { theme: "dark" });
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }


    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENAMBAH ML-AI?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onCreateMlAi()}>
                            YA
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}