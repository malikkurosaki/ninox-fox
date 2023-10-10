'use client'

import { ButtonBack } from "@/modules/_global"
import { Avatar, Box, Button, Center, Grid, Group, Paper, Stack, Text, TextInput } from "@mantine/core"


/**
 * Fungsi untuk menampilkan view add candidate.
 * @returns {component} view add candidate.
 */

export default function AddCandidate() {
    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>ADD CANDIDATE</Text>
            </Stack>
            <Box pt={30}>
                <Paper shadow="xs" p="xl" bg={"#f1f1f1"}>
                    <Stack mt={30}>
                        <Center>
                            <Avatar
                                size={130}
                                radius={100}
                                // src={"../favicon.ico"}
                                alt="kandidat"
                                color="dark"
                            />
                        </Center>
                        <Group justify="center">
                            <Button
                                bg="gray"
                                radius="xl"
                            >
                                UPLOAD
                            </Button>
                        </Group>
                        <Box pt={40}>
                            <TextInput
                                placeholder="Candidate Name"
                            />
                            <Group justify="flex-end">
                                <Button bg={"gray"} mt={30}>PROCESS</Button>
                            </Group>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </>
    )
}