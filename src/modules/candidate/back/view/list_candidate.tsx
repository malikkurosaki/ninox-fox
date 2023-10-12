'use client'

import { Box, Button, Center, Group, Paper, Select, SimpleGrid, Stack, Text, UnstyledButton } from "@mantine/core"
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
                <Group grow mt={30}>
                    <Select
                        placeholder="PROVINCE"
                        data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
                    />
                    <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
                    <Button bg={"gray"} onClick={() => router.push('candidate?prov=bali')}>
                        PROCCESS
                    </Button>
                </Group>
                {title &&
                    <TableCandidate title="PROVINSI BALI" data={[]} />
                }

            </Box>
        </>
    )
}