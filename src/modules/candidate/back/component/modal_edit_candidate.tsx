'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalCandidate } from "../val/isModalCandidate";
import { useRouter } from "next/navigation";
import toast from "react-simple-toasts";
import funEditCandidate from "../fun/edit_candidate";


/**
 * Fungsi untuk menampilkan modal konfirmasi edit kandidat.
 * @returns {component} Modal konfirmasi edit kandidat.
 */


export default function ModalEditCandidate({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const router = useRouter()

    async function onEditCandidate() {
        const edit = await funEditCandidate({ body: data })
        toast("Success", { theme: "dark" });
        setOpenModal(false);
        router.back()
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO EDIT CANDIDATE?
                    </Text>
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => setOpenModal(false)}
                            >
                                NO
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                                onClick={() => onEditCandidate()}
                            >
                                YES
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    )
}