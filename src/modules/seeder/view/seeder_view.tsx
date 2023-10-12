'use client'

import { Box, Button, Divider, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core"

/**
 * Fungsi untuk menampilkan view halaman seeder.
 * @returns  Hasil menampilkan beberapa button untuk seeder.
 */

export default function SeederView() {
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
                                <Button bg={"gray"}>PROVINSI</Button>
                                <Button bg={"gray"}>KABUPATEN / KOTA</Button>
                            </Group>
                            <Group justify="center" gap="md" grow>
                                <Button bg={"gray"}>KECAMATAN</Button>
                                <Button bg={"gray"}>DESA</Button>
                            </Group>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper shadow="xs" p="lg">
                            <Text fw={"bold"}>USER</Text>
                            <Divider mt={10} mb={30} />
                            <Group justify="center" gap="md" grow my={15}>
                                <Button bg={"gray"}>PROVINSI</Button>
                                <Button bg={"gray"}>KABUPATEN / KOTA</Button>
                            </Group>
                        </Paper>
                    </Box>
                </SimpleGrid>
                <Box mt={30}>
                    <Paper shadow="xs" p="lg">
                        <Text fw={"bold"}>DATA LAINNYA</Text>
                        <Divider mt={10} mb={30} />
                    </Paper>
                </Box>
            </Box>
        </>
    )
}