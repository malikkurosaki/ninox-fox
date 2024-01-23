'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import funEditMlAi from "../fun/fun_edit_mlai"
import { funGetAccessArea } from "@/modules/_global"
import { funLogUser } from "@/modules/user"

/**
 * Fungsi untuk menampilkan modal konfirmasi edit ml ai.
 * @returns {component} modal konfirmasi edit ml ai.
 */

export default function ModalEditMlAi({ data, content }: { data: any, content: any }) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const router = useRouter()

    async function onEditMlAi() {
        const cek = await funGetAccessArea({ candidate: data.idCandidate })
        if (!cek) {
            setOpenModal(false)
            return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
        }
        const edit = await funEditMlAi({ body: data, text: content })
        await funLogUser({ act: 'UPD', desc: `User mengubah data ML-AI`, idContent: data.id, tbContent: 'mlai' })
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGEDIT ML-AI?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onEditMlAi()}>
                            YA
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}