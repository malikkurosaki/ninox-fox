'use client'

import { ActionIcon, Box, Button, Group, Modal, Pagination, ScrollArea, Table, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { isModalSwot } from "../val/val_swot";
import ModalDelSwot from "./modal_del_swot";

/**
 * Fungsi untuk menampilkan view table swot.
 * @returns {component} table swot.
 */

export default function TableSwot() {
    const [openModal, setOpenModal] = useAtom(isModalSwot)
    const router = useRouter();
    const elements = [
        { no: 1, category: 'Strength', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Komang Ayu' },
        { no: 2, category: 'Weakness', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Kadek Agung' },
        { no: 3, category: 'Opportunity', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'I Wayan Merta' },
        { no: 4, category: 'Strength', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'Surya Diningrat' },
        { no: 5, category: 'Threat', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.', name: 'I Komang Nuri' },
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
                        <Button bg={"gray"} onClick={() => router.push('swot/add')}>ADD SWOT</Button>
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
                                                    <Table.Td>{v.content}</Table.Td>
                                                    <Table.Td>
                                                        <ActionIcon
                                                            variant="transparent"
                                                            color="rgba(5, 128, 23, 1)"
                                                            size="xl"
                                                            aria-label="Edit"
                                                            onClick={() => router.push('swot/edit/IKomangAyu')}
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
                <ModalDelSwot />
            </Modal>
        </>
    )
}