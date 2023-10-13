'use client'

import { ActionIcon, Box, Button, Divider, Grid, Group, Pagination, Paper, ScrollArea, Stack, Table, Text, TextInput } from "@mantine/core"
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TableLogUser from "../component/table_log_user";

/**
 * Fungsi untuk menampilkan table log user.
 * @returns  Hasil menampilkan tabel log user berdasarkan pencarian.
 */

export default function UserLogView() {
    const [show, setShow] = useState(false)

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
                        <Box>
                            <Grid>
                                <Grid.Col span={3}>
                                    <DateInput
                                        mt={5}
                                        placeholder="Tanggal Awal"
                                        radius={"md"}
                                    // onChange={(val) => {
                                    //     setInputSearchTglAwal(moment(val).format("YYYY-MM-DD"));
                                    // }}
                                    />
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <DateInput
                                        mt={5}
                                        placeholder="Tanggal Akhir"
                                        radius={"md"}
                                    // onChange={(val) => {
                                    //     setInputSearchTglAkhir(moment(val).format("YYYY-MM-DD"));
                                    // }}
                                    />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <TextInput
                                        mt={5}
                                        leftSection={<AiOutlineSearch size={20} />}
                                        placeholder="Cari berdasarkan username"
                                        radius={"md"}
                                    // onChange={(val) => {
                                    //     setInputSearch(val.target.value);
                                    // }}
                                    />
                                </Grid.Col>
                                <Grid.Col span={2}>
                                    <Box mt={5}>
                                        <Button
                                            ta={"center"}
                                            fullWidth
                                            radius={"md"}
                                            onClick={() => {
                                                setShow(true)
                                            }}
                                        >
                                            Cari
                                        </Button>
                                    </Box>
                                </Grid.Col>
                            </Grid>
                        </Box>
                        {show && <TableLogUser />}
                    </Paper>
                </Box>
            </Box>
        </>
    )
}