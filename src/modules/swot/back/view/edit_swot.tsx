'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, Textarea } from "@mantine/core"
import ModalEditSwot from "../component/modal_edit_swot"
import { useAtom } from "jotai"
import { isModalSwot } from "../val/val_swot"

/**
 * Fungsi untuk menampilkan view form edit swot.
 * @returns {component} view form edit swot.
 */

export default function EditSwot() {
    const [openModal, setOpenModal] = useAtom(isModalSwot)

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT SWOT</Text>
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
                <ModalEditSwot />
            </Modal>
        </>
    )
}