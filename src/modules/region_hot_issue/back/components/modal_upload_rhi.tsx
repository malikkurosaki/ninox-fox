'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import { isModalRhi } from "../val/val_rhi"
import { useState } from "react"
import funUploadRhi from "../fun/upload_rhi"
import { funLogUser } from "@/modules/user"
import { funGetAccessArea, funGetIdprovByName } from "@/modules/_global"


export default function ModalUploadRhi({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [openModal, setOpenModal] = useAtom(isModalRhi)
    const [isLoading, setLoading] = useState(false)

    async function onUpload() {
        setLoading(true)
        const prov = await funGetIdprovByName({ name: data[0]?.Provinsi })
        if (prov == null) {
            setOpenModal(false)
            return toast("Nama provinsi salah", { theme: "dark" })
        }
        const cek = await funGetAccessArea({ provinsi: prov?.id })
        if (!cek) {
            setOpenModal(false)
            return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
        }
        await funUploadRhi({ body: data })
        await funLogUser({ act: 'UPL', desc: `User mengupload data Region Hot Issue`, idContent: '-', tbContent: 'rhi' })
        setLoading(false)
        toast('Success', { theme: 'dark' })
        setOpenModal(false)
        onSuccess(true)
    }

    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENGUPDATE DATA REGION HOT ISSUES?
                    </Text>
                    <Group justify="space-between" pt={10}>
                        <Button
                            radius={10}
                            color="gray.7"
                            w={150}
                            onClick={() => setOpenModal(false)}
                        >
                            NO
                        </Button>
                        <Button loading={isLoading} radius={10} color="gray.7" w={150} onClick={() => onUpload()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}