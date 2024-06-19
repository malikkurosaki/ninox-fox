'use client'
import { useAtom } from "jotai"
import { isModalSwot } from "../val/val_swot"
import { ButtonBack, MasterKabGetByProvince } from "@/modules/_global"
import { Box, Button, Group, Modal, Select, Stack, Text, Textarea } from "@mantine/core"
import ModalAddSwot from "../component/modal_add_swot"
import { useEffect, useState } from "react"
import toast from "react-simple-toasts"
import { CiPickerEmpty } from "react-icons/ci"
import { useEditor } from "@tiptap/react"
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { Link, RichTextEditor } from "@mantine/tiptap"
import _, { values } from "lodash"
import { funGetCandidateActiveByArea } from "@/modules/candidate"

/**
 * Fungsi untuk menampilkan view form add swot.
 * @returns {component} view form add swot.
 */

export default function AddSwot({ params, candidate, provinsi, kabupaten }: { params: any, candidate: any, provinsi: any, kabupaten: any }) {
    const [openModal, setOpenModal] = useAtom(isModalSwot)

    const [isDataCandidate, setDataCandidate] = useState(candidate)
    const [dataProvinsi, setDataProvinsi] = useState(provinsi)
    const [dataKabupaten, setDataKabupaten] = useState<any>(kabupaten)
    const [isProvinsi, setProvinsi] = useState<any>(null)
    const [isKabupaten, setKabupaten] = useState<any>(null)
    const [isCandidate, setCandidate] = useState<any>(null)
    const [isCategory, setCategory] = useState<any>(null)

    async function onProvinsi({ idProv }: { idProv: any }) {
        setProvinsi(idProv)
        setKabupaten(null)
        setCandidate(null)
        setBody({
            ...isBody,
            idCandidate: ""
        })
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

    // useEffect(() => {
    //     setProvinsi((params.idProvinsi == 0) ? null : params.idProvinsi)
    //     setKabupaten((params.idKabkot == 0) ? null : params.idKabkot)
    // }, [params])



    const [isBody, setBody] = useState({
        idCandidate: "",
        category: ""
    })

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextStyle,
            Color,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        content: "",
    });

    function onConfirmation() {
        if (Object.values(isBody).includes("") || editor?.getHTML() == '<p></p>')
            return toast("Form cannot be empty", { theme: "dark" });
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
                        searchable
                        label={"Provinsi"}
                        value={isProvinsi}
                        onChange={(val) => (
                            onProvinsi({ idProv: val })
                        )}
                    // disabled
                    />
                    <Select
                        placeholder="Pilih Kabupaten/Kota"
                        data={dataKabupaten.map((kab: any) => ({
                            value: String(kab.id),
                            label: kab.name
                        }))}
                        label={"Kabupaten"}
                        searchable
                        value={isKabupaten}
                        onChange={(val) => (
                            onKabupaten({ idKab: val })
                        )}
                    // disabled
                    />
                </Group>
                <Select mt={20}
                    placeholder="Pilih Kandidat"
                    data={isDataCandidate.map((can: any) => ({
                        value: String(can.id),
                        label: can.name
                    }))}
                    required
                    value={isCandidate}
                    label={"Kandidat"}
                    searchable
                    onChange={(val) => {
                        setCandidate(val)
                        setBody({
                            ...isBody,
                            idCandidate: (_.isNull(val)) ? "" : val
                        })
                    }}
                />
                <Select mt={20}
                    placeholder="Pilih Kategori"
                    required
                    value={isCategory}
                    data={["STRENGTH", "WEAKNESS", "OPPORTUNITY", "THREAT"]}
                    label={"Kategori"}
                    onChange={(val) => {
                        setCategory(val)
                        setBody({
                            ...isBody,
                            category: (_.isNull(val)) ? "" : String(val)
                        })
                    }}
                />
                {/* <Textarea
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
                /> */}
                <Box pt={30}>
                    <RichTextEditor editor={editor}>
                        <RichTextEditor.Toolbar sticky stickyOffset={60}>
                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Bold />
                                <RichTextEditor.Italic />
                                <RichTextEditor.Underline />
                                <RichTextEditor.Strikethrough />
                                <RichTextEditor.ClearFormatting />
                                <RichTextEditor.Highlight />
                                <RichTextEditor.Code />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.H1 />
                                <RichTextEditor.H2 />
                                <RichTextEditor.H3 />
                                <RichTextEditor.H4 />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Blockquote />
                                <RichTextEditor.Hr />
                                <RichTextEditor.BulletList />
                                <RichTextEditor.OrderedList />
                                <RichTextEditor.Subscript />
                                <RichTextEditor.Superscript />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Link />
                                <RichTextEditor.Unlink />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.AlignLeft />
                                <RichTextEditor.AlignCenter />
                                <RichTextEditor.AlignJustify />
                                <RichTextEditor.AlignRight />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.ColorPicker
                                colors={[
                                    '#25262b',
                                    '#868e96',
                                    '#fa5252',
                                    '#e64980',
                                    '#be4bdb',
                                    '#7950f2',
                                    '#4c6ef5',
                                    '#228be6',
                                    '#15aabf',
                                    '#12b886',
                                    '#40c057',
                                    '#82c91e',
                                    '#fab005',
                                    '#fd7e14',
                                ]}
                            />

                            <RichTextEditor.ControlsGroup>
                                <RichTextEditor.Control interactive={false}>
                                    <CiPickerEmpty size="1rem" stroke={"1.5"} />
                                </RichTextEditor.Control>
                                <RichTextEditor.Color color="#F03E3E" />
                                <RichTextEditor.Color color="#7048E8" />
                                <RichTextEditor.Color color="#1098AD" />
                                <RichTextEditor.Color color="#37B24D" />
                                <RichTextEditor.Color color="#F59F00" />
                            </RichTextEditor.ControlsGroup>

                            <RichTextEditor.UnsetColor />
                        </RichTextEditor.Toolbar>

                        <RichTextEditor.Content />
                    </RichTextEditor>
                </Box>
                <Group justify="flex-end">
                    <Button bg={"gray"} mt={30} size="md" onClick={onConfirmation}>SIMPAN</Button>
                </Group>
            </Box>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalAddSwot data={isBody} text={editor?.getHTML()} onSuccess={() => {
                    setKabupaten(null)
                    setCandidate(null)
                    setProvinsi(null)
                    setCategory(null)
                    setBody({
                        ...isBody,
                        idCandidate: "",
                        category: ""
                    })
                    editor?.commands.setContent('<p></p>')
                }} />
            </Modal>
        </>
    )
}