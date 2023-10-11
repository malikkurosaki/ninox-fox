'use client'

import { ActionIcon, Box, Button, Group, Modal, Pagination, ScrollArea, Table, Text } from "@mantine/core"
import { useAtom } from "jotai";
import { isModalStep } from "../val/val_step";
import { useRouter } from "next/navigation";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import ModalDelStep from "./modal_del_step";

/**
 * Fungsi untuk menampilkan view table step.
 * @returns {component} table step.
 */

export default function TableStep() {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const router = useRouter();
    const elements = [
        { no: 1, sentiment:'Positive', category: 'Social', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Komang Ayu' },
        { no: 2, sentiment:'Positive', category: 'Politic', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Kadek Agung' },
        { no: 3, sentiment:'Negative', category: 'Economy', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'I Wayan Merta' },
        { no: 4, sentiment:'Positive', category: 'Technology', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Surya Diningrat' },
        { no: 5, sentiment:'Negative', category: 'Social', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'I Komang Nuri' },
    ];

    return (
        <>
            <Box mt={30}>
                <Box
                    style={{
                        backgroundColor: "gray",
                        padding: 20,
                        borderRadius: 10,
                    }}
                >
                    <Group justify="space-between" gap="lg">
                        <Text fw={"bold"} c={"white"}>{"PROVINSI BALI"}</Text>
                        <Button bg={"gray"} onClick={() => router.push('step/add')}>ADD STEP</Button>
                    </Group>
                    <Box pt={20}>
                        <Box style={{
                            backgroundColor: "white",
                            padding: 10,
                            borderRadius: 10
                        }}>

                            <ScrollArea>
                                <Table withTableBorder horizontalSpacing="xl" >
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th>No</Table.Th>
                                            <Table.Th>Candidate</Table.Th>
                                            <Table.Th>Category</Table.Th>
                                            <Table.Th>Sentiment</Table.Th>
                                            <Table.Th>Content</Table.Th>
                                            <Table.Th w={180}>Action</Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                        {
                                            elements.map((v, i) => (
                                                <Table.Tr key={i}>
                                                    <Table.Td>{v.no}</Table.Td>
                                                    <Table.Td>{v.name}</Table.Td>
                                                    <Table.Td>{v.category}</Table.Td>
                                                    <Table.Td>{v.sentiment}</Table.Td>
                                                    <Table.Td>{v.content}</Table.Td>
                                                    <Table.Td>
                                                        <ActionIcon
                                                            variant="transparent"
                                                            color="rgba(5, 128, 23, 1)"
                                                            size="xl"
                                                            aria-label="Edit"
                                                            onClick={() => router.push('step/edit/IKomangAyu')}
                                                        >
                                                            <MdEditCalendar size={20} />
                                                        </ActionIcon>
                                                        <ActionIcon
                                                            variant="transparent"
                                                            color="rgba(209, 4, 4, 1)"
                                                            size="xl"
                                                            aria-label="Delete"
                                                            onClick={() => setOpenModal(true)}
                                                        >
                                                            <MdDelete size={20} />
                                                        </ActionIcon>
                                                    </Table.Td>
                                                </Table.Tr>
                                            ))
                                        }
                                    </Table.Tbody>
                                </Table>
                            </ScrollArea>
                            <Group justify="flex-end" mt={20}>
                                <Pagination total={10} />
                            </Group>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalDelStep />
            </Modal>
        </>
    )
}