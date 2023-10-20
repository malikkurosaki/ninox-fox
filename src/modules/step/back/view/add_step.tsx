'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Radio, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import ModalAddStep from "../component/modal_add_step"
import { useAtom } from "jotai"
import { isModalStep } from "../val/val_step"
import { useState } from "react"
import toast from "react-simple-toasts"

/**
 * Fungsi untuk menampilkan view form add step.
 * @returns {component} view form add step.
 */

export default function AddStep({ params, candidate, provinsi, kabupaten }: { params: any, candidate: any, provinsi: any, kabupaten: any }) {
    const [openModal, setOpenModal] = useAtom(isModalStep)
    const [isDataCandidate, setDataCandidate] = useState(candidate)
    const [dataProvinsi, setDataProvinsi] = useState(provinsi)
    const [dataKabupaten, setDatakabupaten] = useState<any>(kabupaten)
    const [isProvinsi, setProvinsi] = useState<any>(params.idProvinsi || null)
    const [isKabupaten, setKabupaten] = useState<any>(params.idKabkot || null)


    const [isBody, setBody] = useState({
        idCandidate: "",
        content: "",
        category: "",
        sentiment: "1"
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
                <Text fw={"bold"}>ADD STEP</Text>
            </Stack>
            <Box pt={30}>
                <Stack>
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
                </Stack>
                <Select mt={20}
                    placeholder="CATEGORY"
                    data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]}
                    label={"Category"}
                    searchable
                    required
                    onChange={(val) => {
                        setBody({
                            ...isBody,
                            category: String(val)
                        })
                    }}
                />
                <Radio.Group mt={20} label={"Sentiment"} required value={isBody.sentiment} onChange={(val)=>{
                    setBody({
                        ...isBody,
                        sentiment: val
                    })
                }}>
                    <Group mt="xs">
                        <Radio value="1" label="Positive" />
                        <Radio value="2" label="Negative" />
                    </Group>
                </Radio.Group>
                <Textarea
                    mt={20}
                    placeholder="TEXT"
                    label={"Content"}
                    required
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
                <ModalAddStep data={isBody}/>
            </Modal>
        </>
    )
}