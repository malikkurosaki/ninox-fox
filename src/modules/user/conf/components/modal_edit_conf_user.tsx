'use client'
import React from 'react';
import { Alert, Box, Button, Group, Text } from "@mantine/core"
import funAddConfUser from '../fun/add_conf_user';
import toast from 'react-simple-toasts';
import { useAtom } from 'jotai';
import { isModalConf } from '../val/isModalConf';
import funUpdateConfUser from '../fun/update_conf_user';


export default function ModalEditConfUser({data, dataArea, isFront}: {data: any, dataArea: any, isFront: any}) {
  const [valOpenModal, setOpenModal] = useAtom(isModalConf)
  async function onUser() {
    const create = await funUpdateConfUser({data: data, dataArea: dataArea, isFront: isFront})
    if (!create.success) return toast(create.message, { theme: "dark" });
    // await funLogUser({act:"ADD", desc:`User Add Data Role With User`})
    toast("Sukses", { theme: "dark" });
    setOpenModal(false);
    // router.back()

    console.log(data, dataArea, isFront)
}
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ANDA YAKIN INGIN MENAMBAH USER?
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
            <Button radius={10} color="gray.7" w={150} onClick={onUser}>
              YES
            </Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}

