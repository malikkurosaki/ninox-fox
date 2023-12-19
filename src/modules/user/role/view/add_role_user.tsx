"use client"
import { Box, Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { Checkbox } from '@mantine/core';
import { ButtonBack } from '@/modules/_global';
import { isModalRoleUser } from '../val/val_role_user';
import { useAtom } from 'jotai';
import ModalAddRoleUser from '../components/modal_add_role_user';
import { useRouter } from 'next/navigation';
import toast from 'react-simple-toasts';

/**
 * Fungsi untuk add role user.
 * @returns {Component} hasil untuk menampilkan add role user
 */
export default function AddRoleUser({ data }: { data: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalRoleUser)
  const router = useRouter()
  const [isComponents, setIsComponents] = useState<any[]>(data)
  const [value, setValue] = useState<number[]>([])
  const [isName, setName] = useState("")


  function validationData() {
    if (Object.values(isName).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    if (value.length < 1 || (value.length == 0))
      return toast("User role cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"}>ADD ROLE USER</Text>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder='Create Role User'
            value={isName}
            onChange={(val) =>
              setName(val.target.value)
            }
            mb={20}
          />
          {isComponents.map((v, i) => (
            <Group key={i}>
              <Checkbox
                aria-label="Select row"
                checked={value.includes(v.id)}
                label={v.menu}
                onChange={(event) =>
                  setValue(
                    event.currentTarget.checked
                      ? [...value, v.id]
                      : value.filter((id) => id !== v.id)
                  )
                }
                mb={5}
              />
            </Group>
          ))}
          <Button color="gray.7" mt={20} onClick={validationData}>
            SUBMIT
          </Button>
        </Box>
      </Box>
      <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <ModalAddRoleUser isName={isName} value={value} />
      </Modal>
    </>
  );
}
