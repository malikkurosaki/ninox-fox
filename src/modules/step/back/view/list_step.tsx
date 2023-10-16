'use client'

import { Button, Group, Select, Stack, Text } from "@mantine/core"
import TableStep from "../component/table_step"
import { useRouter } from "next/navigation";

/**
 * Fungsi untuk menampilkan table list step.
 * @param {string} title - Judul table.
 * @returns {component} Table list step sesuai dengan parameter.
 */

export default function ListStep({ title }: { title?: string }) {
    const router = useRouter();

    return (
        <>
            <Stack>
                <Text fw={"bold"}>STEP</Text>
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
                <Button mt={25} bg={"gray"} onClick={() => router.push('step?prov=bali')}>
                    PROCCESS
                </Button>
            </Group>
            {title && <TableStep />}
        </>
    )
}