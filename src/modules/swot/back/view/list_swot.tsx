'use client'

import { Button, Group, Select, Stack, Text } from "@mantine/core"
import { useRouter } from "next/navigation";
import TableSwot from "../component/table_swot";

/**
 * Fungsi untuk menampilkan table list swot.
 * @param {string} title - Judul table.
 * @returns {component} Table list swot sesuai dengan parameter.
 */

export default function ListSwot({ title }: { title?: string }) {
    const router = useRouter();

    return (
        <>
            <Stack>
                <Text fw={"bold"}>SWOT</Text>
            </Stack>
            <Group grow mt={30}>
                <Select
                    placeholder="PROVINCE"
                    data={["BALI", "JAWA BARAT", "JAWA TIMUR", "KALIMANTAN TENGAH"]}
                    required
                    label={"Provinsi"}
                    searchable
                />
                <Select mt={25} placeholder="CITY" data={["BADUNG", "DENPASAR", "TABANAN"]} />
                <Button mt={25} bg={"gray"} onClick={() => router.push('swot?prov=bali')}>
                    PROCCESS
                </Button>
            </Group>
            {title && <TableSwot />}
        </>
    )
}