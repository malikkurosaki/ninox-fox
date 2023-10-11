'use client'

import { Button, Group, Select, Stack, Text } from "@mantine/core"
import { useState } from "react"
import TableMlAi from "../component/table_mlai"
import { useRouter, useSearchParams } from "next/navigation"

/**
 * Fungsi untuk menampilkan table list mlai.
 * @param {string} title - Judul table.
 * @returns {component} Table list mlai sesuai dengan parameter.
 */

export default function ListMlAi({ title }: { title?: string }) {
    const router = useRouter();

    return (
        <>
            <Stack>
                <Text fw={"bold"}>ML - AI</Text>
            </Stack>
            <Group grow mt={30}>
                <Select
                    placeholder="PROVINCE"
                    data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
                />
                <Select placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
                <Button bg={"gray"} onClick={() => router.push('ml-ai?prov=bali')}>
                    PROCCESS
                </Button>
            </Group>
            {title && <TableMlAi />}
        </>
    )
}