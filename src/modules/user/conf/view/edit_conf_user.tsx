"use client"
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { isModalConf } from '../val/isModalConf';
import { Box, Button, Checkbox, Chip, Divider, Group, Modal, NumberInput, Select, SimpleGrid, Stack, Table, Text, TextInput } from '@mantine/core';

import { ButtonBack } from '@/modules/_global';
import toast from 'react-simple-toasts';

export default function EditConfUser({ data, role, wilayah }: { data: any, role: any, wilayah: any }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalConf)
  const [isData, setData] = useState<any[]>(wilayah)
  const [isRole, setRole] = useState<any[]>(role)
  const [dataUser, setDataUser] = useState(data)
  const [isWilayah, setWilayah] = useState<any>([])
  const [isAreaFront, setAreaFront] = useState('')
  const [isCek, setCek] = useState(data.dataUser.isAllArea)
  const [isCekWilayah, setCekWilayah] = useState(data.dataArea.map((item: any) => (item.idProvinsi)))
  const [isDataArea, setDataArea] = useState(data.dataArea)

  function validationData() {
    // if (Object.values(dataUser).includes(""))
    //   return toast("The form cannot be empty", { theme: "dark" });
    // if (isWilayah.length < 1 || (isWilayah.length == 0))
    //   return toast("User role cannot be empty", { theme: "dark" });
    // if (isAreaFront.length < 1 || (isAreaFront.length == 0))
    //   return toast("User role cannot be empty", { theme: "dark" });
    console.log(dataUser)
    setOpenModal(true);
  }
  // console.log((isDataArea.filter((i: any) => i.idProvinsi == 4)[0].isFront))
  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"}>EDIT USER</Text>
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
              value={dataUser.dataUser.idUserRole}
            />
            <TextInput
              placeholder='Name'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  name: val.target.value
                })
              }
              value={dataUser.dataUser.name}
            />
            <TextInput
              placeholder='Email'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  email: val.target.value
                })
              }
              value={dataUser.dataUser.email}
            />
            <TextInput
              placeholder='Password'
              onChange={(val) =>
                setDataUser({
                  ...dataUser,
                  password: val.target.value
                })
              }
              value={dataUser.dataUser.password}
            />
            <NumberInput
              placeholder='Phone'
              onChange={(val: any) =>
                setDataUser({
                  ...dataUser,
                  phone: val
                })
              }
              value={dataUser.dataUser.phone}
            />
            <Chip color="cyan"
              // onChange={(val: any) =>
              //   setDataUser({
              //     ...dataUser,
              //     isAllArea: val
              //   })
              // }
              onChange={(v) => {
                setCek((v: any) => !v)
                setDataUser({
                  ...dataUser,
                  isAllArea: v
                })
              }}
              variant="outline"
              size="lg"
              radius="sm"
              checked={isCek}
            >ALL AREA</Chip>
          </SimpleGrid>
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
                <Table.Th>FRONT</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {isData.map((v, i) => (
                <Table.Tr key={i}>
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>
                    <Chip.Group multiple value={isWilayah} onChange={(v) => {
                      setWilayah((v: any) => v)
                      // setDataArea((v: any) => !v)
                    }}>
                      <Chip 
                      // checked={(isDataArea.filter((i: any) => i.idProvinsi == v.id).length > 0 ? true : false)} 
                      checked={(isDataArea.filter((i: any) => i.idProvinsi == v.id).length > 0 ? true : false)}
                      color="cyan" variant="light" radius="sm" value={String(v.id)}>{v.name}</Chip>
                    </Chip.Group>
                  </Table.Td>
                  <Table.Td>
                    <Chip.Group 
                    multiple={false} value={isAreaFront} onChange={setAreaFront}
                    
                    >
                      <Chip checked={isDataArea.filter((i: any) => i?.idProvinsi == v.isFront)[0]} value={String(v.id)}>DEFAULT</Chip>
                    </Chip.Group>
                  </Table.Td>

                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
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
                <Text fw={"bold"} c={"white"}>UPLOAD</Text>
              </Group>
            </Box>
          </Group>
        </Box>
      </Stack>
      <pre>
        {JSON.stringify(dataUser, null, 1)}
      </pre>
    </>
  );
}