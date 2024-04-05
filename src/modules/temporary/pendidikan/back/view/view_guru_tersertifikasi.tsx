'use client'
import { MasterKabGetByProvince } from "@/modules/_global"
import { useState } from "react"
import { Box, Button, Group, Paper, Select, SimpleGrid, Stack, Text } from "@mantine/core"
import papa from "papaparse"
import funGetGuruTersertifikasi from "../fun/get_guru_tersertifikasi"
import TableGuruTersertifikasi from "../component/table_guru_tersertifikasi"
import { useRouter } from "next/navigation"

export default function ViewGuruTersertifikasi({ provinsi, download, table }: { provinsi: any, download: any, table: any }) {
    const router = useRouter()
    const [isProvinsi, setProvinsi] = useState<any>(null)
    const [isKabupaten, setKabupaten] = useState<any>(null)
    const [dataKabupaten, setDataKabupaten] = useState<any>([])
    const [dataTable, setDataTable] = useState(table)

    async function onProvinsi(val: any) {
        setProvinsi(val)
        setKabupaten(null)
        const loadKab = await MasterKabGetByProvince({ idProvinsi: Number(val) })
        setDataKabupaten(loadKab)
    }

    async function onProses() {
        const loadData = await funGetGuruTersertifikasi({ provinsi: isProvinsi, kab: isKabupaten })
        setDataTable(loadData)
    }

    return (
        <>
            <Stack>
                <Text fw={"bold"}>PENDIDIKAN - GURU TERSERTIFIKASI</Text>
            </Stack>
            <Box pt={30}>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 2 }}
                    spacing={{ base: 10, sm: "xl" }}

                >
                    <Box>
                        <Paper shadow="xs" p="xl">
                            <Stack>
                                <Select
                                    placeholder="Pilih Provinsi"
                                    data={provinsi.map((pro: any) => ({
                                        value: String(pro.id),
                                        label: pro.name
                                    }))}
                                    value={isProvinsi}
                                    label={"Provinsi"}
                                    searchable
                                    onChange={(val) => onProvinsi(val)}
                                />
                                <Select
                                    placeholder="Pilih Kabupaten/Kota"
                                    data={dataKabupaten.map((kab: any) => ({
                                        value: String(kab.id),
                                        label: kab.name
                                    }))}
                                    value={isKabupaten}
                                    label="Kabupaten/Kota"
                                    searchable
                                    onChange={(val) => setKabupaten(val)}
                                />
                                <Button
                                    bg={"gray"}
                                    onClick={() => onProses()}
                                >
                                    PROSES
                                </Button>
                            </Stack>
                        </Paper>
                    </Box>
                    <Group
                        justify="left"
                        style={{
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                        px={50}
                    >
                        <Box
                            style={{
                                border: "1px dashed gray",
                                borderRadius: 10,
                                paddingTop: 40,
                                paddingBottom: 40,
                                paddingLeft: 30,
                                paddingRight: 30,
                                cursor: "pointer",
                            }}
                            onClick={() => router.push("/dashboard/se/upload/guru-tersertifikasi")}
                        >
                            <Text ta={"center"} size="xl" inline>
                                UPLOAD DATA
                            </Text>
                        </Box>

                        <Box
                            style={{
                                border: "1px dashed gray",
                                borderRadius: 10,
                                padding: 40,
                                cursor: "pointer"
                            }}
                            onClick={() => {
                                const dataJson = download.data

                                const jsonData = papa.unparse(dataJson)
                                const jsonDataUrl = "data:text/csv;charset=utf-8," + encodeURIComponent(jsonData)

                                const jsonDwnloadLink = document.createElement("a")
                                jsonDwnloadLink.href = jsonDataUrl
                                jsonDwnloadLink.download = download.title + ".csv"
                                jsonDwnloadLink.click()
                            }}
                        >
                            <Text ta={"center"} size="xl" inline>
                                DOWNLOAD
                            </Text>
                        </Box>
                    </Group>
                </SimpleGrid>
            </Box>
            <Box pt={30}>
                <TableGuruTersertifikasi data={dataTable.data} title={dataTable.title} th={dataTable.thTitle} />
            </Box>
        </>
    )
}