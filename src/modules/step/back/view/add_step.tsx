'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Radio, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import ModalAddStep from "../component/modal_add_step"
import { useAtom } from "jotai"
import { isModalStep } from "../val/val_step"

/**
 * Fungsi untuk menampilkan view form add step.
 * @returns {component} view form add step.
 */

export default function AddStep() {
    const [openModal, setOpenModal] = useAtom(isModalStep)

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>ADD STEP</Text>
            </Stack>
            <Box pt={30}>
                <Stack>

                <Group grow>
                <TextInput disabled label="Provinsi" value={"BALI"} required  />
                <TextInput disabled label="Kabupaten" value={"DENPASAR"}  required/>
                    
                </Group>
                <TextInput disabled label="Candidate" value={"I KOMANG AYU"}  required/>
                </Stack>
                <Select mt={20} label={"Category"} required placeholder="CATEGORY" data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]} />
                <Radio.Group mt={20} label={"Sentiment"} required>
                    <Group mt="xs">
                        <Radio value="Positive" label="Positive"/>
                        <Radio value="Negative" label="Negative" />
                    </Group>
                </Radio.Group>
                <Textarea
                    mt={20}
                    placeholder="CONTENT"
                    label={"Content"}
                    required
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
                <ModalAddStep />
            </Modal>
        </>
    )
}