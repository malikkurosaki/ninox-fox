"use client"
import { Box, Button, Grid, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';

import { useListState, randomId, useFocusTrap } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';
import { RiEmotionLaughLine } from 'react-icons/ri';
import { ButtonBack } from '@/modules/_global';
import { useAtom } from 'jotai';
import { isModalRoleUser } from '../val/val_role_user';
import ModalEditRoleUser from '../components/modal_edit_role_user';
import toast from 'react-simple-toasts';

const emotion = [
  { label: 'Pencarian Data', checked: false, key: 1 },
  { label: 'Upload Data', checked: false, key: 2 },
  { label: 'Download Data', checked: false, key: 3 },
  { label: 'Copy Data', checked: false, key: 4 },
  { label: 'Tabel Data', checked: false, key: 5 },
];

/**
 * Fungsi untuk eidt role user.
 * @returns {Component} hasil untuk menampilkan edit role user
 */
export default function EditRoleUser({ data, component }: { data: any, component: any }) {
  const focusTrapRef = useFocusTrap();
  const [valOpenModal, setOpenModal] = useAtom(isModalRoleUser)
  const [listData, setListData] = useState(data)
  const [isIdRole, setIdRole] = useState(data.dataRole.id)
  const [isNameRole, setNameRole] = useState(data.dataRole.name)
  const [dbComponent, setdbComponent] = useState(data.dataComponent)
  const [isComponents, setIsComponents] = useState<any[]>(component)

  function validationData() {
    if (Object.values(listData).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"}>EDIT ROLE USER</Text>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10
          }}
        >
          <Grid>
            <Grid.Col span={{ md: 6, lg: 6 }}  >
              <Box
                style={{
                  border: `1px solid #474747`,
                  padding: 20,
                  borderRadius: 10,
                }}
                ref={focusTrapRef}
              >
                <Stack>
                  <Text>Edit Role User</Text>
                  <TextInput placeholder="Name" value={isNameRole} onChange={(val) => {
                    setNameRole(val.target.value)
                  }} />

                  {isComponents.map((v, i) => (
                    <Group key={i}>
                      <Checkbox
                        aria-label="Select row"
                        checked={dbComponent.includes(v.id)}
                        label={v.menu}
                        onChange={(event) =>
                          setdbComponent(
                            event.currentTarget.checked
                              ? [...dbComponent, v.id]
                              : dbComponent.filter((id: any) => id !== v.id)
                          )
                        }
                      />
                    </Group>
                  ))}

                  <Button fullWidth radius={10} color="gray.7" onClick={validationData}>SUBMIT</Button>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
      <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <ModalEditRoleUser name={isNameRole} component={dbComponent} id={isIdRole} />
      </Modal>
    </>
  );
}
