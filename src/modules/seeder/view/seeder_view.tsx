'use client'

import { Box, Button, Divider, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { useState } from "react"
import toast from "react-simple-toasts";
import { funSeederProvinsi } from "../fun/fun_provinsi";
import { funSeederKabupaten } from "../fun/fun_kabupaten";
import { funSeederKecamatan } from "../fun/fun_kecamatan";
import { funSeederDesa } from "../fun/fun_desa";
import { funSeederLeader } from "../fun/fun_leader";
import { funSeederPublic } from "../fun/fun_public";

/**
 * Fungsi untuk menampilkan view halaman seeder.
 * @returns  Hasil menampilkan beberapa button untuk seeder.
 */

export default function SeederView() {
    const [loading, setLoading] = useState(false)

    // WILAYAH
    async function onProvince() {
        setLoading(true);
        const res = await funSeederProvinsi();
        if (res?.success)
            return setLoading(false), toast(res?.message, { theme: "dark" });
    }
    async function onKabupaten() {
        setLoading(true)
        const res = await funSeederKabupaten()
        if (res?.success) return setLoading(false), toast(res?.message, { theme: "dark" })
    }
    async function onKecamatan() {
        setLoading(true)
        const res = await funSeederKecamatan()
        if (res?.success) return setLoading(false), toast(res?.message, { theme: "dark" })
    }
    async function onKelurahan() {
        setLoading(true)
        const res = await funSeederDesa()
        if (res?.success) return setLoading(false), toast(res?.message, { theme: "dark" })
    }

    // DATA LAINYA
    async function onLeader() {
        setLoading(true)
        const res = await funSeederLeader()
        if (res?.success) return setLoading(false), toast(res?.message, { theme: "dark" })
    }
    async function onPublic() {
        setLoading(true)
        const res = await funSeederPublic()
        if (res?.success) return setLoading(false), toast(res?.message, { theme: "dark" })
    }



    return (
        <>
            <Stack>
                <Text fw={"bold"}>SEEDER</Text>
            </Stack>
            <Box pt={30}>
                <SimpleGrid
                    cols={{ base: 2, sm: 2, lg: 2 }}
                    spacing={{ base: 10, sm: "xl" }}
                    verticalSpacing={{ base: "md", sm: "xl" }}
                >
                    <Box>
                        <Paper shadow="xs" p="lg">
                            <Text fw={"bold"}>WILAYAH</Text>
                            <Divider mt={10} mb={30} />
                            <Group justify="center" gap="md" grow my={15}>
                                <Button bg={"gray"} loading={loading} onClick={onProvince}>PROVINSI</Button>
                                <Button bg={"gray"} loading={loading} onClick={onKabupaten}>KABUPATEN / KOTA</Button>
                            </Group>
                            <Group justify="center" gap="md" grow>
                                <Button bg={"gray"} loading={loading} onClick={onKecamatan}>KECAMATAN</Button>
                                <Button bg={"gray"} loading={loading} onClick={onKelurahan}>DESA</Button>
                            </Group>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper shadow="xs" p="lg">
                            <Text fw={"bold"}>USER</Text>
                            <Divider mt={10} mb={30} />
                            <Group justify="center" gap="md" grow my={15}>
                                <Button bg={"gray"}>USER ROLE</Button>
                                <Button bg={"gray"}>USER</Button>
                            </Group>
                        </Paper>
                    </Box>
                </SimpleGrid>
                <Box mt={30}>
                    <Paper shadow="xs" p="lg">
                        <Text fw={"bold"}>DATA LAINNYA</Text>
                        <Divider mt={10} mb={30} />
                        <Group justify="center" gap="md" grow my={15}>
                            <Button bg={"gray"} loading={loading} onClick={onLeader}>LEADER TRAIT ASSESSMENT</Button>
                            <Button bg={"gray"} loading={loading} onClick={onPublic}>PUBLIC CONCERN TREND</Button>
                        </Group>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}