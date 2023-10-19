'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, Textarea } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import ModalEditMlAi from "../component/modal_edit_mlai"

/**
 * Fungsi untuk menampilkan view form edit mlai.
 * @returns {component} view form edit mlai.
 */

export default function EditMlAi({data}: {data: any}) {
    const [openModal, setOpenModal] = useAtom(isModalMlAi)

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>EDIT ML-AI</Text>
            </Stack>
            <Box pt={30}>
                <Group grow>
                    <Select
                        placeholder="PROVINCE"
                        data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
                    />
                    <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
                </Group>
                <Select mt={20} placeholder="CANDIDATE" data={["KOMANG", "WAYAN", "AGUNG"]} value={"KOMANG"}/>
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
                <ModalEditMlAi />
            </Modal>
        </>
    )
}