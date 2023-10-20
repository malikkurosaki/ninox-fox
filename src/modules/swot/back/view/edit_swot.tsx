'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import ModalEditSwot from "../component/modal_edit_swot"
import { useAtom } from "jotai"
import { isModalSwot } from "../val/val_swot"
import { useState } from "react"

/**
 * Fungsi untuk menampilkan view form edit swot.
 * @returns {component} view form edit swot.
 */

export default function EditSwot({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalSwot)
    const [isBody, setBody] = useState({
        id: data.id,
        idCandidate: data.idCandidate,
        content: data.content,
        category: data.category
    })

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT SWOT</Text>
            </Stack>
            <Box pt={30}>
                <Stack>
                    <Group grow>
                        <TextInput label={"Provinsi"} value={data.areaProvinsi} disabled />
                        <TextInput label={"Kabupaten"} value={data.areaKabkot} disabled />
                    </Group>
                    <TextInput label={"Candidate"} value={data.name} disabled />
                </Stack>
                <Select mt={20}
                    placeholder="CATEGORY"
                    data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]}
                    value={isBody.category}
                    searchable
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            category: String(val)
                        })
                    }}
                />
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
                <ModalEditSwot data={isBody} />
            </Modal>
        </>
    )
}