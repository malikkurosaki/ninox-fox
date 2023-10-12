'use client'

import { Box, Button, Center, Paper, Select, SimpleGrid, Stack, Text, UnstyledButton } from "@mantine/core"
import { useState } from "react"
import TableCandidate from "../component/table_candidate"
import { useRouter } from "next/navigation"


/**
 * Fungsi untuk menampilkan select wilayah.
 * @param {string} title - judul
 * @returns {component} Select wilayah.
 */

export default function ListCandidates({ title }: { title: string }) {
    const router = useRouter()

    return (
        <>
            <Stack>
                <Text fw={"bold"}>CANDIDATE</Text>
            </Stack>
            <Box pt={30}>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 2 }}
                    spacing={{ base: 10, sm: "xl" }}
                    verticalSpacing={{ base: "md", sm: "xl" }}
                >
                    <Box>
                        <Paper shadow="xs" p="xl">
                            <Stack>
                                <Select
                                    placeholder="PROVINCE"
                                    data={[
                                        "BALI",
                                        "JAWA BARAT",
                                        "JAWA TIMUR",
                                        "KALIMANTAN TENGAH",
                                    ]}
                                />
                                <Select
                                    placeholder="CITY"
                                    data={["BADUNG", "DENPASAR", "TABANAN"]}
                                />
                                <Button bg={"gray"} onClick={() => router.push('candidate?prov=bali')}>PROCESS</Button>
                            </Stack>
                        </Paper>
                    </Box>
                </SimpleGrid>
                {title &&
                    <TableCandidate title="PROVINSI BALI" data={[]} />
                }

            </Box>
        </>
    )
}