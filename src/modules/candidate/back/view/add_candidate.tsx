'use client'

import { ButtonBack } from "@/modules/_global"
import { Avatar, Box, Button, Center, Grid, Group, Modal, Paper, Stack, Text, TextInput } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalCandidate } from "../val/isModalCandidate"
import ModalAddCandidate from "../component/modal_add_candidate"


/**
 * Fungsi untuk menampilkan view add candidate.
 * @returns {component} view add candidate.
 */

export default function AddCandidate() {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)


    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>ADD CANDIDATE</Text>
            </Stack>
            <Box pt={30}>
                <Paper shadow="xs" p="xl" bg={"#f1f1f1"}>
                    <Stack mt={30}>
                        <Center>
                            <Avatar
                                size={130}
                                radius={100}
                                // src={"../favicon.ico"}
                                alt="kandidat"
                                color="dark"
                            />
                        </Center>
                        <Group justify="center">
                            <Button
                                bg="gray"
                                radius="xl"
                            >
                                UPLOAD
                            </Button>
                        </Group>
                        <Box pt={40}>
                            <TextInput
                                placeholder="Candidate Name"
                            />
                            <Group justify="flex-end">
                                <Button bg={"gray"} mt={30} onClick={() => setOpenModal(true)}>SAVE</Button>
                            </Group>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalAddCandidate />
            </Modal>
        </>
    )
}