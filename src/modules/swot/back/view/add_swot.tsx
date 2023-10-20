'use client'

import { useAtom } from "jotai"
import { isModalSwot } from "../val/val_swot"
import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, Textarea } from "@mantine/core"
import ModalAddSwot from "../component/modal_add_swot"
import { useState } from "react"
import toast from "react-simple-toasts"

/**
 * Fungsi untuk menampilkan view form add swot.
 * @returns {component} view form add swot.
 */

export default function AddSwot({ params, candidate, provinsi, kabupaten }: { params: any, candidate: any, provinsi: any, kabupaten: any }) {
    const [openModal, setOpenModal] = useAtom(isModalSwot)

    const [isDataCandidate, setDataCandidate] = useState(candidate)
    const [dataProvinsi, setDataProvinsi] = useState(provinsi)
    const [dataKabupaten, setDatakabupaten] = useState<any>(kabupaten)
    const [isProvinsi, setProvinsi] = useState<any>(params.idProvinsi || null)
    const [isKabupaten, setKabupaten] = useState<any>(params.idKabkot || null)


    const [isBody, setBody] = useState({
        idCandidate: "",
        content: "",
        category: ""
    })

    function onConfirmation() {
        if (Object.values(isBody).includes(""))
            return toast("Data cannot be empty", { theme: "dark" });
        setOpenModal(true)
    }

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>TAMBAH SWOT</Text>
            </Stack>
            <Box pt={30}>
                <Group grow>
                    <Select
                        placeholder="Pilih Provinsi"
                        data={dataProvinsi.map((pro: any) => ({
                            value: String(pro.id),
                            label: pro.name
                        }))}
                        required
                        label={"Provinsi"}
                        value={isProvinsi}
                        disabled
                    />
                    <Select
                        placeholder="Pilih Kabupaten/Kota"
                        data={dataKabupaten.map((kab: any) => ({
                            value: String(kab.id),
                            label: kab.name
                        }))}
                        label={"Kabupaten"}
                        value={isKabupaten}
                        disabled
                    />
                </Group>
                <Select mt={20}
                    placeholder="Pilih Kandidat"
                    data={isDataCandidate.map((can: any) => ({
                        value: String(can.id),
                        label: can.name
                    }))}
                    required
                    value={String(isBody.idCandidate)}
                    label={"Kandidat"}
                    searchable
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            idCandidate: String(val)
                        })
                    }}
                />
                <Select mt={20}
                    placeholder="Pilih Kategori"
                    required
                    data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]}
                    label={"Kategori"}
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            category: String(val)
                        })
                    }}
                />
                <Textarea
                    mt={20}
                    label={"Content"}
                    required
                    placeholder="Value Content"
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            content: val.target.value
                        })
                    }}
                />
                <Group justify="flex-end">
                    <Button bg={"gray"} mt={30} size="md" onClick={onConfirmation}>SAVE</Button>
                </Group>
            </Box>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalAddSwot data={isBody}/>
            </Modal>
        </>
    )
}