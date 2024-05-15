"use client";
import { Badge, Box, Button, Divider, Grid, Group, Pagination, Paper, ScrollArea, Select, Stack, Table, Text } from "@mantine/core";
import moment from "moment";
import { useState } from "react";
import funGetAllNotifikasiBack from "../fun/fun_get_all_notifikasi_back";
import { useRouter } from "next/navigation";
import { IoAddCircleOutline } from "react-icons/io5";

export default function ViewListNotification({ data, nPage, admin }: { data: any, nPage: any, admin: any }) {
   const router = useRouter()
   const [isUser, setUser] = useState<any>("")
   const [isdata, setData] = useState<any>(data)
   const [isNPage, setNPage] = useState(nPage)
   const [isChoosePage, setChoosePage] = useState(1)
   let noAwal = isChoosePage * 25 - 24;


   async function onLog(p: any) {
      const load = await funGetAllNotifikasiBack({ page: p, admin: isUser })
      setChoosePage(p)
      setData(load.data)
      setNPage(load.nPage)
   }

   return (
      <>
         <Stack>
            <Text fw={"bold"}>DAFTAR NOTIFIKASI</Text>
         </Stack>
         <Box pt={30}>
            <Box>
               <Paper shadow="xs" p="lg">
                  <Box>
                     <Grid>
                        <Grid.Col span={8}>
                           <Select
                              mt={5}
                              placeholder="Pilih Admin"
                              data={admin.map((pro: any) => ({
                                 value: String(pro.id),
                                 label: pro.name,
                              }))}
                              value={isUser}
                              onChange={(val) => {
                                 setUser(val)
                              }}
                              searchable
                           />
                        </Grid.Col>
                        <Grid.Col span={2}>
                           <Box mt={5}>
                              <Button
                                 ta={"center"}
                                 fullWidth
                                 radius={"md"}
                                 onClick={() => {
                                    onLog(1)
                                 }}
                              >
                                 Cari
                              </Button>
                           </Box>
                        </Grid.Col>
                        <Grid.Col span={2}>
                           <Box mt={5}>
                              <Button
                                 leftSection={<IoAddCircleOutline size={20} />}
                                 ta={"center"}
                                 fullWidth
                                 radius={"md"}
                                 onClick={() => {
                                    router.push('/dashboard/notifikasi/add')
                                 }}
                              >
                                 Tambah
                              </Button>
                           </Box>
                        </Grid.Col>
                     </Grid>
                  </Box>
                  <Box pt={30}>
                     <ScrollArea>
                        <Table >
                           <Table.Thead>
                              <Table.Tr>
                                 <Table.Th w={"10px"}>No</Table.Th>
                                 <Table.Th w={"150px"}>Tanggal</Table.Th>
                                 <Table.Th>Notifikasi</Table.Th>
                                 <Table.Th>Menu</Table.Th>
                                 <Table.Th>User</Table.Th>
                                 <Table.Th>Admin</Table.Th>
                                 <Table.Th>Keterangan</Table.Th>
                              </Table.Tr>
                           </Table.Thead>
                           <Table.Tbody>
                              {isdata.map((e: any, i: any) => (
                                 <Table.Tr key={i}>
                                    <Table.Td>{noAwal++}</Table.Td>
                                    <Table.Td>
                                       {moment(e.createdAt).format("llll")}
                                    </Table.Td>
                                    <Table.Td>
                                       <Text fw={'bold'}>{e.title} </Text>
                                       <Text>{e.description} </Text>
                                    </Table.Td>
                                    <Table.Td>{e.category}</Table.Td>
                                    <Table.Td>{e.user}</Table.Td>
                                    <Table.Td>{e.admin}</Table.Td>
                                    <Table.Td>
                                       {(e.isRead) ?
                                          <Badge variant="light" color="green">read</Badge>
                                          :
                                          <Badge variant="light" color="grey">unread</Badge>
                                       }

                                    </Table.Td>
                                 </Table.Tr>
                              ))}
                           </Table.Tbody>
                        </Table>
                     </ScrollArea>
                  </Box>
                  <Group justify="right" mt={20}>
                     <Pagination
                        value={isChoosePage}
                        onChange={(val) => {
                           onLog(val)
                        }}
                        total={isNPage}
                     />
                  </Group>
               </Paper>
            </Box>
         </Box>
      </>
   );
}
