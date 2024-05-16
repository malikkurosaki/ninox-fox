'use client'
import { ButtonBack } from "@/modules/_global"
import { Box, Button, Group, Modal, ScrollArea, Stack, Table, Text, rem } from "@mantine/core"
import { Dropzone } from "@mantine/dropzone"
import { useState } from "react"
import { AiOutlineUpload } from "react-icons/ai"
import { MdCancelPresentation } from "react-icons/md"
import { GrDocumentCsv } from 'react-icons/gr';
import toast from "react-simple-toasts"
import papa from 'papaparse'
import { useAtom } from "jotai"
import { isModalEmotion } from "../val/val_emotion"
import { ModalUploadEmotion } from "../.."

export default function ViewUploadEmotion() {
    const [json, setJson] = useState<any[]>([])
    const [openModal, setOpenModal] = useAtom(isModalEmotion)
    const [isLoading, setLoading] = useState(false)


    async function onLoad(data: any) {
        if (data.length > 0) {
            if (
                ('id' in data[0]) &&
                ('idCandidate' in data[0]) &&
                ('idProvinsi' in data[0]) &&
                ('idKabkot' in data[0]) &&
                ('idKecamatan' in data[0]) &&
                ('idKelurahan' in data[0]) &&
                ('candidate' in data[0]) &&
                ('provinsi' in data[0]) &&
                ('kabkot' in data[0]) &&
                ('kecamatan' in data[0]) &&
                ('kelurahan' in data[0]) &&
                ('date' in data[0]) &&
                ('confidence' in data[0]) &&
                ('supportive' in data[0]) &&
                ('positive' in data[0]) &&
                ('undecided' in data[0]) &&
                ('unsupportive' in data[0]) &&
                ('uncomfortable' in data[0]) &&
                ('negative' in data[0]) &&
                ('dissapproval' in data[0])
            ) {
                setJson(data as any)
            } else {
                setJson([])
                toast('Format CSV salah', { theme: 'dark' })
            }
        } else {
            setJson([])
            toast('Data Kosong', { theme: 'dark' })
        }
    }


    return (
        <>
            <Stack>
                <ButtonBack />
            </Stack>
            <Stack p={"md"}>
                <Box
                    style={{
                        backgroundColor: "gray",
                        padding: 20,
                        borderRadius: 10
                    }}
                >
                    <Text fw={"bold"} c={"white"} mb={20}>UPLOAD DATA EMOTION</Text>
                    <Dropzone
                        loading={isLoading}
                        style={{
                            border: "1px dashed",
                            color: "white",
                            borderRadius: 10,
                            cursor: "pointer"
                        }}
                        onDrop={async (files: any) => {
                            setLoading(true)
                            const csv_file = Buffer.from(await files[0].arrayBuffer()).toString()
                            const { data } = papa.parse(csv_file, { header: true, })
                            onLoad(data)
                            setLoading(false)
                        }}
                        onReject={(files: any) => {
                            toast("success")

                        }}
                        maxSize={3 * 1024 ** 2}
                        accept={['text/csv']}
                    >
                        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                            <Dropzone.Accept>
                                <AiOutlineUpload
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                                    stroke={"1.5"}
                                />
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <MdCancelPresentation
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                                    stroke={"1.5"}
                                />
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <GrDocumentCsv
                                    style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                                    stroke={"1.5"}
                                />
                            </Dropzone.Idle>

                            <div>
                                <Text size="xl" inline>
                                    Drag files here or click to select files
                                </Text>
                                <Text size="sm" inline mt={7} >
                                    Attach one file, the file must not exceed 5MB
                                </Text>
                            </div>
                        </Group>
                    </Dropzone>
                    {
                        (json.length > 0) && (
                            <>
                                <Box style={{
                                    borderRadius: 10,
                                    paddingTop: 20
                                }}>
                                    <Box
                                        style={{
                                            backgroundColor: "white",
                                            padding: 10,
                                            borderRadius: 10,
                                        }}
                                    >


                                        <ScrollArea>
                                            <Table
                                                withTableBorder
                                                withRowBorders={false}
                                                horizontalSpacing="xl"
                                            >
                                                <Table.Thead>
                                                    <Table.Tr
                                                        style={{
                                                            borderBottom: "1px solid #CED4D9",
                                                        }}
                                                    >
                                                        <Table.Th>ID</Table.Th>
                                                        <Table.Th>Candidate</Table.Th>
                                                        <Table.Th>Provinsi</Table.Th>
                                                        <Table.Th>Kabupaten/Kota</Table.Th>
                                                        <Table.Th>Kecamatan</Table.Th>
                                                        <Table.Th>Kelurahan</Table.Th>
                                                        <Table.Th>Tanggal</Table.Th>
                                                        <Table.Th>Confidence</Table.Th>
                                                        <Table.Th>Supportive</Table.Th>
                                                        <Table.Th>Positive</Table.Th>
                                                        <Table.Th>Undecided</Table.Th>
                                                        <Table.Th>Unsupportive</Table.Th>
                                                        <Table.Th>Uncomfortable</Table.Th>
                                                        <Table.Th>Negative</Table.Th>
                                                        <Table.Th>Dissapproval</Table.Th>
                                                    </Table.Tr>
                                                </Table.Thead>
                                                <Table.Tbody>
                                                    {json.map((home: any, i: any) =>
                                                        <Table.Tr key={i + 1}>
                                                            <Table.Td>{home.id}</Table.Td>
                                                            <Table.Td>{home.candidate}</Table.Td>
                                                            <Table.Td>{home.provinsi}</Table.Td>
                                                            <Table.Td>{home.kabkot}</Table.Td>
                                                            <Table.Td>{home.kecamatan}</Table.Td>
                                                            <Table.Td>{home.kelurahan}</Table.Td>
                                                            <Table.Td>{home.date}</Table.Td>
                                                            <Table.Td>{home.confidence}</Table.Td>
                                                            <Table.Td>{home.supportive}</Table.Td>
                                                            <Table.Td>{home.positive}</Table.Td>
                                                            <Table.Td>{home.undecided}</Table.Td>
                                                            <Table.Td>{home.unsupportive}</Table.Td>
                                                            <Table.Td>{home.uncomfortable}</Table.Td>
                                                            <Table.Td>{home.negative}</Table.Td>
                                                            <Table.Td>{home.dissapproval}</Table.Td>
                                                        </Table.Tr>
                                                    )}
                                                </Table.Tbody>
                                            </Table>
                                        </ScrollArea>

                                    </Box>
                                </Box>
                                <Group justify="flex-end">
                                    <Box
                                        style={{
                                            padding: 10,
                                            borderRadius: 5,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            position: "fixed",
                                            bottom: 30,
                                            right: 30,
                                            backgroundColor: "green",
                                            boxShadow: "2px solid gray",
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                            setOpenModal(true)
                                        }}
                                    >
                                        <Group>
                                            <AiOutlineUpload size={25} color={"white"} />
                                            <Text fw={"bold"} c={"white"}>UPLOAD</Text>
                                        </Group>
                                    </Box>
                                </Group>
                            </>
                        )
                    }
                </Box>
            </Stack>

            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
                closeOnClickOutside={false}
            >
                <ModalUploadEmotion data={json} onSuccess={(val) => {
                    setJson([])
                }} />
            </Modal>
        </>
    );
}