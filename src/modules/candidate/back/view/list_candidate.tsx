'use client'

import { Box, Button, Center, Group, Paper, Select, SimpleGrid, Stack, Text, UnstyledButton } from "@mantine/core"
import { useEffect, useState } from "react"
import TableCandidate from "../component/table_candidate"
import { useRouter } from "next/navigation"
import { MasterKabGetByProvince } from "@/modules/_global/fun/master_kabupaten_get_by_province"
import toast from "react-simple-toasts"
import _ from "lodash"


/**
 * Fungsi untuk menampilkan select wilayah.
 * @param {string} title - judul
 * @returns {component} Select wilayah.
 */


export default function ListCandidates({ param, provinsi, kabupaten, datatable }: { param: any, provinsi: any, kabupaten: any, datatable: any }) {

    const router = useRouter()
    const [dataProvinsi, setDataProvinsi] = useState(provinsi)
    const [dataKab, setDataKab] = useState<any>(kabupaten)
    const [isProvinsi, setProvinsi] = useState<any>(param.idProvinsi || null)
    const [isKabupaten, setKabupaten] = useState<any>(param.idKabkot || null)


    async function onKabupaten({ idProv }: { idProv: any }) {
        setProvinsi(idProv)
        setKabupaten(null)
        const dataDbKab = await MasterKabGetByProvince({ idProvinsi: Number(idProv) })
        setDataKab(dataDbKab)
    }

    function onProccess() {
        if (isProvinsi == null) return toast("Silahkan pilih provinsi", { theme: "dark" })
        router.replace('/dashboard/candidate?prov=' + isProvinsi + '&city=' + isKabupaten)
    }

    useEffect(() => {
        setProvinsi((param.idProvinsi == 0) ? null : param.idProvinsi)
        setKabupaten((param.idKabkot == 0) ? null : param.idKabkot)
    }, [param])

    return (
        <>

            <Stack>
                <Text fw={"bold"}>KANDIDAT</Text>
            </Stack>
            <Group grow mt={30}>
                <Select
                    placeholder="Pilih Provinsi"
                    data={dataProvinsi.map((pro: any) => ({
                        value: String(pro.id),
                        label: pro.name
                    }))}
                    searchable
                    label="Provinsi"
                    required
                    value={isProvinsi}
                    onChange={(val) => {
                        onKabupaten({ idProv: val })
                    }}
                />
                <Select searchable
                    label="Kabupaten"
                    placeholder="Pilih Kabupaten/Kota"
                    data={dataKab.map((kab: any) => ({
                        value: String(kab.id),
                        label: kab.name
                    }))}
                    value={isKabupaten}
                    onChange={(val) => {
                        setKabupaten(val)
                    }}
                />
                <Button mt={25} bg={"gray"} onClick={() => onProccess()}>
                    PROSES
                </Button>
            </Group>
            {!_.isNull(datatable.title) &&
                <TableCandidate title={datatable.title} data={datatable.data} searchParam={param} />
            }
        </>
    )
}