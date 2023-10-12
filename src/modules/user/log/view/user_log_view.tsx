'use client'

import { Box, Divider, Paper, Stack, Text } from "@mantine/core"

/**
 * Fungsi untuk menampilkan table log user.
 * @returns  Hasil menampilkan tabel log user berdasarkan pencarian.
 */

export default function UserLogView() {
    return (
        <>
            <Stack>
                <Text fw={"bold"}>LOG USER</Text>
            </Stack>
            <Box pt={30}>
                <Box>
                    <Paper shadow="xs" p="lg">
                        <Text fw={"bold"}>DATA LOG</Text>
                        <Divider mt={10} mb={30} />

                    </Paper>
                </Box>
            </Box>
        </>
    )
}