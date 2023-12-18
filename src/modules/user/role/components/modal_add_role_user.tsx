'use client'

import { Alert, Box, Button, Group, Text } from "@mantine/core"
import { useAtom } from "jotai"
import toast from "react-simple-toasts"
import { useRouter } from "next/navigation"
import { isModalRoleUser } from "../val/val_role_user"
import funAddRoleUser from "../fun/add_role_user"
import funLogUser from "../../log/fun/add_log"

/**
 * Fungsi untuk menampilkan modal konfirmasi add role user.
 * @returns {component} modal konfirmasi add role user.
 */

export default function ModalAddRoleUser({isName, value,}: {isName: any, value: any}) {
    const [openModal, setOpenModal] = useAtom(isModalRoleUser)
    const router = useRouter()

    async function onRoleUser() {
        const create = await funAddRoleUser({name: isName, component: value})
        if (!create.success) return toast(create.message, { theme: "dark" });
        await funLogUser({act:"ADD", desc:`User Add Data Role With User`})
        toast("Sukses", { theme: "dark" });
        setOpenModal(false);
        // router.back()

        console.log(isName, value)
    }



    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ANDA YAKIN INGIN MENAMBAH ROLE USER?
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
                        <Button radius={10} color="gray.7" w={150} onClick={() => onRoleUser()}>
                            YES
                        </Button>
                    </Group>
                </Alert>
            </Box>
        </>
    )
}
