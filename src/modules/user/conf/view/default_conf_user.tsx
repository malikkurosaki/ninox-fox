"use client"
import { ButtonBack, MasterKabGetByProvince } from '@/modules/_global';
import { Box, Button, Checkbox, Chip, Divider, Group, Modal, NumberInput, Select, SimpleGrid, Stack, Table, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import _ from "lodash"
import ModalUpdateDefaultUser from '../components/modal_default_user';
import { useAtom } from 'jotai';
import { isModalConf } from '../val/isModalConf';
import toast from 'react-simple-toasts';
import funUpdateUserArea from '@/modules/_global/home/fan/update_user_area_front';
import { funGetCandidateActiveByArea } from '@/modules/candidate';

export default function DefaultConfUser({ provinsi, idUser }: { provinsi: any, idUser: any }) {
    const [valOpenModal, setOpenModal] = useAtom(isModalConf)
    const [dataKabupaten, setDataKabupaten] = useState<any>([])
    const [dataCandidate, setDataCandidate] = useState<any>([])
    const [isProvinsi, setProvinsi] = useState(null)
    const [isKabupaten, setKabupaten] = useState(null)
    const [isCandidate, setCandidate] = useState<any>(null)

    async function defaultWilayah() {
        if (_.isNull(isProvinsi)) return toast("Silahkan pilih provinsi", { theme: "dark" })
        if (_.isNull(isCandidate)) return toast("Silahkan pilih kandidat", { theme: "dark" })
        setOpenModal(true)
    }

    async function onProvinsi({ idProv }: { idProv: any }) {
        setProvinsi(idProv)
        setKabupaten(null)
        setCandidate(null)
        const dataDbKab = await MasterKabGetByProvince({ idProvinsi: Number(idProv) })
        const dataDbCan = await funGetCandidateActiveByArea({ find: { idProvinsi: Number(idProv), tingkat: 1 } })
        setDataKabupaten(dataDbKab)
        setDataCandidate(dataDbCan)
    }

    async function onKabupaten({ idKab }: { idKab: any }) {
        setKabupaten(idKab)
        setCandidate(null)
        const dataDbCan = await funGetCandidateActiveByArea({ find: { idProvinsi: Number(isProvinsi), idKabkot: Number(idKab), tingkat: 2 } })
        setDataCandidate(dataDbCan)
    }

    return (
        <>
            <Stack>
                <ButtonBack />
                <Text fw={"bold"}>UPDATE DEFAULT WILAYAH & KANDIDAT USER</Text>
                <Box
                    style={{
                        backgroundColor: "white",
                        padding: 20,
                        borderRadius: 10
                    }}
                >
                    <SimpleGrid
                        cols={{ base: 1, sm: 2, lg: 2 }}
                        spacing={{ base: 10, sm: 'xl' }}
                        verticalSpacing={{ base: 'md', sm: 'xl' }}
                    >
                        <Select
                            placeholder='Pilih Provinsi'
                            data={provinsi.map((pro: any) => ({
                                value: String(pro.idProvinsi),
                                label: pro.name
                            }))}
                            value={isProvinsi}
                            required
                            label={"Provinsi"}
                            // searchable
                            onChange={(val) => onProvinsi({ idProv: val })}
                        />
                        <Select
                            placeholder='Pilih Kabupaten/Kota'
                            data={dataKabupaten.map((kab: any) => ({
                                value: String(kab.id),
                                label: kab.name
                            }))}
                            value={isKabupaten}
                            label="Kabupaten/Kota"
                            searchable
                            onChange={(val) => onKabupaten({ idKab: val })}
                        />
                        <Select
                            placeholder='Pilih Kandidat'
                            data={dataCandidate.map((can: any) => ({
                                value: String(can.id),
                                label: can.name
                            }))}
                            value={isCandidate}
                            required
                            label={"Kandidat"}
                            searchable
                            onChange={(val) => setCandidate(val)}
                        />
                    </SimpleGrid>
                    <Group justify="flex-end">
                        <Button bg={"gray"} mt={0} size="md" onClick={defaultWilayah}>SUBMIT</Button>
                    </Group>
                </Box>
            </Stack>
            <Modal
                opened={valOpenModal}
                onClose={() => setOpenModal(false)}
                centered
                closeOnClickOutside={false}
                withCloseButton={false}
            >
                <ModalUpdateDefaultUser prov={isProvinsi} kab={isKabupaten} can={isCandidate} user={idUser} />
            </Modal>
        </>
    );
}

