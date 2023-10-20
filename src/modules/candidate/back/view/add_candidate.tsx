'use client'

import { ButtonBack } from "@/modules/_global"
import { Avatar, Box, Button, Center, Grid, Group, Modal, Paper, Stack, Text, TextInput } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalCandidate } from "../val/isModalCandidate"
import ModalAddCandidate from "../component/modal_add_candidate"
import { useState } from "react"
import toast from "react-simple-toasts"
import { useSearchParams } from "next/navigation"
import _ from "lodash"


/**
 * Fungsi untuk menampilkan view add candidate.
 * @returns {component} view add candidate.
 */

export default function AddCandidate() {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const query = useSearchParams()
    const [body, setBody] = useState({
        name: "",
        idProvinsi: Number(query.get('prov')),
        idKabkot: (query.get('city') == 'null' || query.get('city') == "" || _.isNull(query.get('city'))) ? null : Number(query.get('city')),
        tingkat: (query.get('city') == 'null' || query.get('city') == "" || _.isNull(query.get('city'))) ? 1 : 2
    });

    function onConfirmation() {
        if (body.name === "")
            return toast("Nama tidak boleh kosong", { theme: "dark" });
        setOpenModal(true)
    }


    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>TAMBAH KANDIDAT</Text>
            </Stack>
            <Box pt={30}>
                <Paper shadow="xs" p="xl" bg={"#f1f1f1"}>
                    <Stack mt={30}>
                        <Center>
                            <Avatar
                                size={130}
                                radius={100}
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
                                placeholder="Nama Kandidat" withAsterisk label="Nama"
                                onChange={(val) => {
                                    setBody({
                                        ...body,
                                        name: val.target.value
                                    })
                                }}
                            />
                            <Group justify="flex-end">
                                <Button bg={"gray"} mt={30} onClick={() => onConfirmation()}>SAVE</Button>
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
                <ModalAddCandidate data={body} />
            </Modal>
        </>
    )
}