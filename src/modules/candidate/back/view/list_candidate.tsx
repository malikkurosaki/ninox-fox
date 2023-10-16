'use client'

import { Box, Button, Center, Group, Paper, Select, SimpleGrid, Stack, Text, UnstyledButton } from "@mantine/core"
import { useState } from "react"
import TableCandidate from "../component/table_candidate"
import { useRouter } from "next/navigation"
import { MasterProvinceGetAll } from "@/modules/_global/fun/master_province_get_all"
import { MasterKabGetByProvince } from "@/modules/_global/fun/master_kabupaten_get_by_province"


/**
 * Fungsi untuk menampilkan select wilayah.
 * @param {string} title - judul
 * @returns {component} Select wilayah.
 */

export default function ListCandidates({ title, provinsi }: { title: string, provinsi: any }) {
    const router = useRouter()

    const [isProvinsi, setProvinsi] = useState(provinsi)
    const [isKab, setKab] = useState<any>([])

    async function onKabupaten({ idProv }: { idProv: any }) {

        const dataKab = await MasterKabGetByProvince({ idProvinsi: Number(idProv) })
        setKab(dataKab)
    }

    return (
        <>

            {/* {JSON.stringify(isProvinsi)} */}
            <Stack>
                <Text fw={"bold"}>CANDIDATE</Text>
            </Stack>
            <Group grow mt={30}>
                <Select
                    placeholder="PROVINCE"
                    data={isProvinsi.map((pro: any) => ({
                        value: String(pro.id),
                        label: pro.name
                    }))}
                    searchable
                    label="Provinsi"
                    required
                    onChange={(val) => {
                        onKabupaten({ idProv: val })
                    }}
                />
                <Select searchable
                    label="Kabupaten"
                    placeholder="CITY"
                    data={isKab.map((kab: any) => ({
                        value: String(kab.id),
                        label: kab.name
                    }))}
                />
                <Button mt={25} bg={"gray"} onClick={() => router.push('candidate?prov=bali')}>
                    PROCCESS
                </Button>
            </Group>
            {title &&
                <TableCandidate title="PROVINSI BALI" data={[]} />
            }
        </>
    )
}