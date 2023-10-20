'use client'

import { ButtonBack } from "@/modules/_global"
import { Avatar, Box, Button, Center, Grid, Group, Modal, Paper, Stack, Text, TextInput } from "@mantine/core"
import { useAtom } from "jotai"
import { isModalCandidate } from "../val/isModalCandidate"
import ModalAddCandidate from "../component/modal_add_candidate"
import { useRef, useState } from "react"
import toast from "react-simple-toasts"
import { useSearchParams } from "next/navigation"
import _ from "lodash"
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import { funUploadImg } from "../fun/fun_upload_img"
import { funUpdProfileImg } from "../fun/fun_upd_file_img"


/**
 * Fungsi untuk menampilkan view add candidate.
 * @returns {component} view add candidate.
 */

export default function AddCandidate({ params, candidate, provinsi, kabupaten }: { params: any, candidate: any, provinsi: any, kabupaten: any }) {
    const [openModal, setOpenModal] = useAtom(isModalCandidate)
    const [hasilGambar, setHasilGambar] = useState(
        `/img/user/${candidate.img}`
    )
    const [dataUser, setDataUser] = useState(candidate);
    const query = useSearchParams()
    const openRef = useRef<() => void>(null);
    const [body, setBody] = useState({
        name: "",
        img: "",
        idProvinsi: Number(query.get('prov')),
        idKabkot: (query.get('city') == 'null' || query.get('city') == "" || _.isNull(query.get('city'))) ? null : Number(query.get('city')),
        tingkat: (query.get('city') == 'null' || query.get('city') == "" || _.isNull(query.get('city'))) ? 1 : 2
    });

    function onConfirmation() {
        if (body.name === "")
            return toast("Nama tidak boleh kosong", { theme: "dark" });
        setOpenModal(true)
    }


    return (
        <>
            {/* <pre>{JSON.stringify(candidate, null, 2)}</pre> */}
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>TAMBAH KANDIDAT</Text>
            </Stack>
            <Box pt={30}>
                <Paper shadow="xs" p="xl" bg={"#f1f1f1"}>
                    <Stack mt={30}>
                        <Center>
                            <Avatar
                                size={130}
                                radius={100}
                                alt="kandidat"
                                color="dark"
                            />
                        </Center>
                        <Group justify="center">
                            <Center pt={10}>
                                <Dropzone
                                    openRef={openRef}
                                    onDrop={async (files) => {
                                        if (!files || _.isEmpty(files))
                                            return toast("tidak ada yang dipilih");
                                        const fd = new FormData();
                                        fd.append("file", files[0]);

                                        const apa = await funUploadImg(fd);
                                        if (apa.success) {
                                            setHasilGambar(
                                                `/img/user/${apa.data.id}.${apa.data.img}`
                                            );
                                            funUpdProfileImg({ id: dataUser.id, img: String(apa.data.id) })
                                            return toast("Success", { theme: "dark" });
                                        }
                                    }}
                                    onReject={(files) => console.log("rejected files", files)}
                                    // maxSize={3 * 1024 ** 2}
                                    accept={IMAGE_MIME_TYPE}
                                    activateOnClick={false}
                                    styles={{ inner: { pointerEvents: "all" } }}
                                    // sx={(theme) => ({
                                    //     display: "flex",
                                    //     justifyContent: "center",
                                    //     alignItems: "center",
                                    //     border: 0,
                                    //     backgroundColor:
                                    //         theme.colorScheme === "dark"
                                    //             ? theme.colors.dark[6]
                                    //             : theme.colors.gray[0],

                                    //     "&[data-accept]": {
                                    //         color: theme.white,
                                    //         backgroundColor: theme.colors.blue[6],
                                    //     },

                                    //     "&[data-reject]": {
                                    //         color: theme.white,
                                    //         backgroundColor: theme.colors.red[6],
                                    //     },
                                    // })}
                                >
                                    <Group justify="center">
                                        <Button
                                            color="gray.5"
                                            radius="xl"
                                            onClick={() => openRef.current?.()}
                                        >
                                            Edit Image Profile
                                        </Button>
                                    </Group>
                                </Dropzone>
                            </Center>
                        </Group>
                        <Box pt={40}>
                            <TextInput
                                placeholder="Nama Kandidat" withAsterisk label="Nama"
                                onChange={(val) => {
                                    setBody({
                                        ...body,
                                        name: val.target.value
                                    })
                                }}
                            />
                            <Group justify="flex-end">
                                <Button bg={"gray"} mt={30} onClick={() => onConfirmation()}>SAVE</Button>
                            </Group>
                        </Box>
                    </Stack>
                </Paper>
            </Box>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalAddCandidate data={body} />
            </Modal>
        </>
    )
}