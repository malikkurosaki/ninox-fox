'use client'
import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import { useState } from "react"
import { isModalEmotion } from "../../val/val_emotion"
import funUploadEmotion from "../../fun/upload_emotion"
import { funGetAccessArea } from "@/modules/_global"
import { funLogUser } from "@/modules/user"
import moment from "moment"

export default function ModalUploadEmotion({ data, onSuccess }: { data: any, onSuccess: (val: any) => void }) {
    const [openModal, setOpenModal] = useAtom(isModalEmotion)
    const [isLoading, setLoading] = useState(false)

    async function onUpload() {
        setLoading(true)
        const cek = await funGetAccessArea({ provinsi: data[0].idProvinsi })
        if (!cek) {
            setLoading(false)
            return toast("Anda tidak mempunyai akses ke wilayah tersebut", { theme: "dark" })
        }
        await funUploadEmotion({ body: data })
        await funLogUser({ act: 'UPL', desc: `User mengupload data Emotion (${data[0].idCandidate} - ${moment(data[0].date).format('DD/MM/YYYY')})`, idContent: '-', tbContent: 'emotion' })
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
                        ANDA YAKIN INGIN MENGUPLOAD DATA EMOTION?
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