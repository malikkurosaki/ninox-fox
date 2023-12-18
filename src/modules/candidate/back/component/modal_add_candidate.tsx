'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalCandidate } from "../val/isModalCandidate";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funAddCandidate from "../fun/add_candidate";


/**
 * Fungsi untuk menampilkan modal konfirmasi add kandidat.
 * @returns {component} Modal konfirmasi add kandidat.
 */


export default function ModalAddCandidate({ data, img }: { data: any, img: any }) {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const router = useRouter()

    async function onCreateCandidate() {
        const create = await funAddCandidate({ body: data, img: img })
        if (!create.success)
            toast(create.message, { theme: "dark" });
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENAMBAHKAN KANDIDAT?
                    </Text>
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => setOpenModal(false)}
                            >
                                TIDAK
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => onCreateCandidate()}
                            >
                                YA
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    )
}