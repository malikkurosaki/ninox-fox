'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Radio, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import ModalAddMlAi from "../component/modal_add_mlai"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import _, { values } from "lodash"
import { funGetCandidateActiveByArea } from "@/modules/candidate"
import toast from "react-simple-toasts"

/**
 * Fungsi untuk menampilkan view form add mlai.
 * @returns {component} view form add mlai.
 */

export default function AddMlAi({ params, candidate, provinsi, kabupaten }: { params: any, candidate: any, provinsi: any, kabupaten: any }) {
    const today = new Date();
    const [openModal, setOpenModal] = useAtom(isModalMlAi)
    const query = useSearchParams()
    const [isDataCandidate, setDataCandidate] = useState(candidate)
    const [dataProvinsi, setDataProvinsi] = useState(provinsi)
    const [dataKabupaten, setDatakabupaten] = useState<any>(kabupaten)
    const [isProvinsi, setProvinsi] = useState<any>(params.idProvinsi || null)
    const [isKabupaten, setKabupaten] = useState<any>(params.idKabkot || null)


    const [isBody, setBody] = useState({
        idCandidate: "",
        content: ""
    })

    function onConfirmation() {
        if (Object.values(isBody).includes(""))
            return toast("Data cannot be empty", { theme: "dark" });
        setOpenModal(true)
    }

    return (
        <>
            <ButtonBack />
            {/* <pre>{JSON.stringify(isDataCandidate, null, 2)}</pre> */}
            <Stack mt={30}>
                <Text fw={"bold"}>ADD ML-AI</Text>
            </Stack>
            <Box pt={30}>
                <Group grow>
                    <Select
                        placeholder="PROVINCE"
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
                        placeholder="CITY"
                        data={dataKabupaten.map((kab: any) => ({
                            value: String(kab.id),
                            label: kab.name
                        }))}
                        label={"Kabupaten"}
                        value={isKabupaten}
                        disabled
                    />
                </Group>
                <Select
                    placeholder="CANDIDATE"
                    data={isDataCandidate.map((can: any) => ({
                        value: String(can.id),
                        label: can.name
                    }))}
                    required
                    value={String(isBody.idCandidate)}
                    label={"Candidate"}
                    searchable
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            idCandidate: String(val)
                        })
                    }}
                />
                <Textarea
                    mt={20}
                    placeholder="TEXT"
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
                <ModalAddMlAi data={isBody} />
            </Modal>
        </>
    )
}