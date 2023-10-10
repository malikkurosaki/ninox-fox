'use client'

import { ActionIcon, Box, Button, Center, Group, Image, Paper, Stack, Table, Text } from "@mantine/core"
import { useRouter } from "next/navigation";
import { MdDelete, MdOutlineModeEdit } from "react-icons/md";

/**
 * Fungsi untuk menampilkan table list kandidat.
 * @param {string} title - Judul table.
 * @param {any[]} data - data table.
 * @returns {component} Table list candidate sesuai dengan parameter.
 */

export default function TableCandidate({ title, data }: { title: string, data: any[] }) {
    const elements = [
        { position: 1, mass: 12.011, symbol: 'C', name: 'Komang Ayu' },
        { position: 2, mass: 14.007, symbol: 'N', name: 'Kadek Agung' },
        { position: 3, mass: 88.906, symbol: 'Y', name: 'I Wayan Merta' },
        { position: 4, mass: 137.33, symbol: 'Ba', name: 'Surya Diningrat' },
        { position: 5, mass: 140.12, symbol: 'Ce', name: 'I Komang Nuri' },
    ];

    const router = useRouter();

    return (
        <>
            <Box pt={30}>
                <Paper shadow="xs" p="xl" bg={"#f1f1f1"}>
                    <Group justify="space-between" gap="lg">
                        <Text fw={"bold"}>{title}</Text>
                        <Button bg={"gray"} onClick={()=> router.push('candidate/add')}>ADD CANDIDATE</Button>
                    </Group>
                    <Stack mt={30}>
                        <Table highlightOnHover withTableBorder withColumnBorders bg={"white"}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>No</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th>Image</Table.Th>
                                    <Table.Th>Action</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {elements.map((v) => (
                                    <Table.Tr key={v.name}>
                                        <Table.Td>{v.position}</Table.Td>
                                        <Table.Td>{v.name}</Table.Td>
                                        <Table.Td>
                                            <Image
                                                src={"../favicon.ico"}
                                                radius={100}
                                                maw={{ base: 50, sm: 50 }}
                                                mx="auto"
                                                alt="img"
                                            />
                                        </Table.Td>
                                        <Table.Td>
                                            <Group>
                                                <Box>
                                                    <ActionIcon
                                                        color="yellow.9"
                                                        onClick={() =>
                                                            router.push('candidate/edit/IKomangAyu')
                                                        }
                                                    >
                                                        <MdOutlineModeEdit size="23" />
                                                    </ActionIcon>
                                                </Box>
                                                <Box>
                                                    <ActionIcon
                                                        color="red.9"
                                                        onClick={() => {
                                                            console.log()
                                                        }}
                                                    >
                                                        <MdDelete size="23" />
                                                    </ActionIcon>
                                                </Box>
                                            </Group>
                                        </Table.Td>
                                    </Table.Tr>
                                ))}
                            </Table.Tbody>

                        </Table>
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}