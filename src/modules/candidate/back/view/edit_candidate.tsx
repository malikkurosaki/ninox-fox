'use client'

import { ButtonBack } from "@/modules/_global"
import { Avatar, Box, Button, Center, Group, Modal, Paper, Stack, Text, TextInput } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalCandidate } from "../val/isModalCandidate"
import ModalEditCandidate from "../component/modal_edit_candidate"
import { useState } from "react"

/**
 * Fungsi untuk menampilkan view edit candidate.
 * @param {string} data - Data get one dari database.
 * @returns {component} view edit candidate.
 */

export default function EditCandidate({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const [dataEdit, setDataEdit] = useState({
        id: data.id,
        name: data.name,
        img: data.img
    })

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT KANDIDAT</Text>
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
                                placeholder="Nama Kandidat"
                                value={dataEdit.name}
                                onChange={(val) => {
                                    setDataEdit({
                                        ...dataEdit,
                                        name: val.target.value
                                    })
                                }}
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
                <ModalEditCandidate data={dataEdit} />
            </Modal>
        </>
    )
}