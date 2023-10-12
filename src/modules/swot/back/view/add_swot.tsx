'use client'

import { useAtom } from "jotai"
import { isModalSwot } from "../val/val_swot"
import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, Textarea } from "@mantine/core"
import ModalAddSwot from "../component/modal_add_swot"

/**
 * Fungsi untuk menampilkan view form add swot.
 * @returns {component} view form add swot.
 */

export default function AddSwot() {
    const [openModal, setOpenModal] = useAtom(isModalSwot)

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>ADD SWOT</Text>
            </Stack>
            <Box pt={30}>
                <Group grow>
                    <Select
                        placeholder="PROVINCE"
                        data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
                    />
                    <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
                </Group>
                <Select mt={20} placeholder="CANDIDATE" data={["KOMANG", "WAYAN", "AGUNG"]} />
                <Select mt={20} placeholder="CATEGORY" data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]} />
                <Textarea
                    mt={20}
                    placeholder="TEXT"
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
                <ModalAddSwot />
            </Modal>
        </>
    )
}