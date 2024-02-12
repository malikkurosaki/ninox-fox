'use client'
import { Box, Button, Divider, Group, Paper, Stack, Text } from "@mantine/core"
import papa from "papaparse"
import funDownloadArea from "../fun/download_area"

export default function ViewWilayah() {

    async function onDownload(kat: any) {
        const dataDb = await funDownloadArea({ cat: kat })
        const dataJson = dataDb.data

        const jsonData = papa.unparse(dataJson)
        const jsonDataUrl = "data:text/csv;charset=utf-8," + encodeURIComponent(jsonData)

        const jsonDwnloadLink = document.createElement("a")
        jsonDwnloadLink.href = jsonDataUrl
        jsonDwnloadLink.download = dataDb.title + ".csv"
        jsonDwnloadLink.click()
    }

    return (
        <>
            <Stack>
                <Text fw={"bold"}>DOWNLOAD WILAYAH</Text>
            </Stack>
            <Box mt={30}>
                <Paper shadow="xs" p="lg">
                    <Text fw={"bold"}>DATA WILAYAH</Text>
                    <Divider mt={10} mb={30} />
                    <Group justify="center" gap="md" grow my={15}>
                        <Button bg={"gray"} onClick={() => { onDownload('provinsi') }}> PROVINSI </Button>
                        <Button bg={"gray"} onClick={() => { onDownload('kabkot') }}>KABUPATEN/KOTA</Button>
                        <Button bg={"gray"} onClick={() => { onDownload('kecamatan') }}>KECAMATAN</Button>
                        <Button bg={"gray"} onClick={() => { onDownload('kelurahan') }}>DESA/KELURAHAN</Button>
                    </Group>
                </Paper>
            </Box>
        </>
    )
}