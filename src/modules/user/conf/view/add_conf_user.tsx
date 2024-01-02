"use client"
import { ButtonBack } from '@/modules/_global';
import { Box, Button, Checkbox, Chip, Divider, Group, Modal, NumberInput, Select, SimpleGrid, Stack, Table, Text, TextInput } from '@mantine/core';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isModalConf } from '../val/isModalConf';
import toast from 'react-simple-toasts';
import ModalConfUser from '../components/modal_conf_user';
import _ from "lodash"


export default function AddConfUser({ data, role }: { data: any, role: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalConf)
  const [isData, setData] = useState<any[]>(data)
  const [isRole, setRole] = useState<any[]>(role)
  const [isWilayah, setWilayah] = useState<any>([])
  const [isAreaFront, setAreaFront] = useState('')
  // const [dataWilayah, setDataWilayah] = useState()
  const [checked, setChecked] = useState(false);


  const [dataUser, setDataUser] = useState({
    idUserRole: Number(),
    name: "",
    email: "",
    password: "",
    phone: "",
    isAllArea: checked
  })

  function validationData() {
    if (Object.values(checked).includes(""))
      return toast("The form cannot be empty", { theme: "dark" });
    // if (Object.values(dataUser.idUserRole).includes(""))
    //   return toast("The form cannot be empty", { theme: "dark" });
    // if (Object.values(dataUser.email).includes(""))
    //   return toast("The form cannot be empty", { theme: "dark" });
    // if (Object.values(dataUser.password).includes(""))
    //   return toast("The form cannot be empty", { theme: "dark" });
    // if (Object.values(dataUser.phone).includes(""))
    //   return toast("The form cannot be empty", { theme: "dark" });
    // if (isWilayah.length < 1 || (isWilayah.length == 0))
    //   return toast("Wilayah cannot be empty", { theme: "dark" });
    // if (isAreaFront.length < 1 || (isAreaFront.length == 0))
    //   return toast("Area Front cannot be empty", { theme: "dark" });
    setOpenModal(true);
  }

  // pembatasan
  function setDefault(val: any) {
    if (!isWilayah.includes(val))
      return toast('Pilih Sesuai Wilayah', { theme: "dark" })
    setAreaFront(val)
  }

  function setDataArea(val: any) {
    setChecked((v) => !v)
    setDataUser({
      ...dataUser,
      isAllArea: val,
    })
  }


  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"}>ADD USER</Text>
        <Box
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10
          }}
        >
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: 'xl' }}
            verticalSpacing={{ base: 'md', sm: 'xl' }}
          >
            <Select
              placeholder='Pilih Role User'
              data={isRole.map((role) => ({
                value: String(role.id),
                label: role.name
              }))}
              onChange={(val: any) =>
                setDataUser({
                  ...dataUser,
                  idUserRole: val
                })
              }
            />
            <TextInput
              placeholder='Name'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  name: val.target.value
                })
              }
            />
            <TextInput
              placeholder='Email'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  email: val.target.value
                })
              }
            />
            <TextInput
              placeholder='Password'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  password: val.target.value
                })
              }
            />
            <NumberInput
              placeholder='Phone'
              onChange={(val: any) =>
                setDataUser({
                  ...dataUser,
                  phone: val
                })
              }
            />
            <Chip color="cyan"
              checked={checked} onChange={(val) => setDataArea(val)}
              variant="outline" size="lg" radius="sm">ALL AREA</Chip>
          </SimpleGrid>
          {!dataUser.isAllArea && (
          <Box>
          <Box pt={40} pb={40}>
            <Divider size={"md"} />
          </Box >
            <Text mb={10} fw={"bold"}>PILIH WILAYAH</Text>
            <Table
              withTableBorder
              horizontalSpacing="xl"
            >
              <Table.Thead>
                <Table.Tr
                  style={{
                    borderBottom: "1px solid #CED4D9",
                  }}
                >
                  <Table.Th>No</Table.Th>
                  <Table.Th>PROVINSI</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {isData.map((v, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{i + 1}</Table.Td>
                    <Table.Td>
                      <Chip.Group multiple value={isWilayah} onChange={setWilayah}>
                        <Chip color="cyan" variant="light" radius="sm" value={String(v.id)}>{v.name}</Chip>
                      </Chip.Group>
                    </Table.Td>
                    {/* <Table.Td>
                    <Chip.Group multiple={false} value={isAreaFront} onChange={(val) => setDefault(val)}>
                      <Chip value={String(v.id)}>DEFAULT</Chip>
                    </Chip.Group>
                  </Table.Td> */}

                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
          )}
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
            onClick={validationData}
          >
            <Group>
              <Text fw={"bold"} c={"white"}>SUBMIT</Text>
            </Group>
          </Box>
        </Group>
      </Stack>
      <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        closeOnClickOutside={false}
        withCloseButton={false}
      >
        <ModalConfUser data={dataUser} dataArea={isWilayah} />
      </Modal>
    </>
  );
}

