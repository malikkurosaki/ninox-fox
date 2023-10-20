'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Radio, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalStep } from "../val/val_step"
import ModalEditStep from "../component/modal_edit_step"
import { useState } from "react"

/**
 * Fungsi untuk menampilkan view form edit step.
 * @returns {component} view form edit step.
 */

export default function EditStep({ data }: { data: any }) {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const [isBody, setBody] = useState({
        id: data.id,
        idCandidate: data.idCandidate,
        content: data.content,
        category: data.category,
        sentiment: String(data.sentiment)
    })

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT STEP</Text>
            </Stack>
            <Box pt={30}>
                <Stack>
                    <Group grow>
                        <TextInput label={"Provinsi"} value={data.areaProvinsi} disabled />
                        <TextInput label={"Kabupaten"} value={data.areaKabkot} disabled />
                    </Group>
                    <TextInput label={"Kandidat"} value={data.name} disabled />
                </Stack>
                <Select mt={20}
                    placeholder="Pilih Kategori"
                    withAsterisk
                    label="Kategori"
                    data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]}
                    value={isBody.category}
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            category: String(val)
                        })
                    }}
                />
                <Radio.Group mt={20} label={"Sentiment"} required value={isBody.sentiment} onChange={(val: any)=>{
                    setBody({
                        ...isBody,
                        sentiment: val
                    })
                }}>
                    <Group mt="xs">
                        <Radio value="1" label="Positive" />
                        <Radio value="2" label="Negative" />
                    </Group>
                </Radio.Group>
                <Textarea
                    mt={20}
                    placeholder="Value Content"
                    label="Content"
                    withAsterisk
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
                <ModalEditStep data={isBody}/>
            </Modal>
        </>
    ) 
}