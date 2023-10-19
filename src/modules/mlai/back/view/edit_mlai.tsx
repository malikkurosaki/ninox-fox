'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import ModalEditMlAi from "../component/modal_edit_mlai"
import { useState } from "react"

/**
 * Fungsi untuk menampilkan view form edit mlai.
 * @returns {component} view form edit mlai.
 */

export default function EditMlAi({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const [isBody, setBody] = useState({
        id: data.id,
        idCandidate: data.idCandidate,
        content: data.content
    })

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT ML-AI</Text>
            </Stack>
            <Box pt={30}>
                <Stack>
                <Group grow>
                    <TextInput label={"Provinsi"} value={data.areaProvinsi} disabled/>
                    <TextInput label={"Kabupaten"} value={data.areaKabkot} disabled/>
                </Group>
                    <TextInput label={"Candidate"} value={data.name} disabled/>
                </Stack>
                <Textarea
                    mt={20}
                    placeholder="TEXT"
                    value={isBody.content}
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            content: val.target.value
                        })
                    }}
                />
                <Group justify="flex-end">
                    <Button bg={"gray"} mt={30} size="md" onClick={() => setOpenModal(true)}>SAVE</Button>
                </Group>
            </Box>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalEditMlAi data={isBody} />
            </Modal>
        </>
    )
}