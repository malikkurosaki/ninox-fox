'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalCandidate } from "../val/isModalCandidate";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funSetStatusCandidate from "../fun/set_status_candidate";


/**
 * Fungsi untuk menampilkan modal konfirmasi delete kandidat.
 * @returns {component} Modal konfirmasi delete kandidat.
 */


export default function ModalDelCandidate({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const router = useRouter()

    async function onDeleteCandidate() {
        const del = await funSetStatusCandidate({ dataUpdate: data })
        if (!del.success) return toast("Failed", { theme: "dark" })
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        onSuccess(true);
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGEDIT STATUS KANDIDAT?
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
                                onClick={() => onDeleteCandidate()}
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