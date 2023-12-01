'use client'

import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, Radio, Select, Stack, Text, TextInput, Textarea } from "@mantine/core"
import ModalAddMlAi from "../component/modal_add_mlai"
import { useAtom } from "jotai"
import { isModalMlAi } from "../val/val_mlai"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import _, { values } from "lodash"
import toast from "react-simple-toasts"
import { Link, RichTextEditor } from "@mantine/tiptap"
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
    const [isCandidate, setCandidate] = useState<any>("")

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
        if (isCandidate == "" || editor?.getHTML() == '<p></p>')
            return toast("Data cannot be empty", { theme: "dark" });
        setOpenModal(true)
    }

    return (
        <>
            <ButtonBack />
            <Stack mt={30}>
                <Text fw={"bold"}>TAMBAH ML-AI</Text>
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
                <Select
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
                    }}
                />
                {/* <Textarea
                    mt={20}
                    placeholder="Value Content"
                    label="Content"
                    withAsterisk
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
                                    <CiPickerEmpty size="1rem" stroke={1.5} />
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
                <ModalAddMlAi candidate={isCandidate} text={editor?.getHTML()} />
            </Modal>
        </>
    )
}