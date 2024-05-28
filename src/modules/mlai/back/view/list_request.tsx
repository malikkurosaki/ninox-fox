'use client'
import { Box, Group, Indicator, Stack, Tabs, Text } from "@mantine/core"
import TableRequest from "../component/table_request"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import TableRequestTerjawab from "../component/table_request_terjawab";

export default function ListRequest({ data, page }: { data: any, page: any }) {
   return (
      <>
         <Stack>
            <Text fw={"bold"}>Data Request</Text>
         </Stack>

         <Box mt={30}>
            <Box
               style={{
                  backgroundColor: "#B5B5B5",
                  padding: 20,
                  borderRadius: 10,
               }}
            >
               <Tabs variant="pills" color="teal" radius="md" defaultValue="belum">
                  <Tabs.List>
                     <Tabs.Tab value="belum" leftSection={<MdOutlineMarkEmailUnread size={20} />}>
                        <Group style={{
                           alignItems: 'center',
                           alignContent: 'center'
                        }}>
                           <Text >
                              BELUM TERJAWAB
                           </Text>
                           <Text fw={"bold"}>
                              20
                           </Text>
                        </Group>
                     </Tabs.Tab>
                     <Tabs.Tab value="terjawab" leftSection={<MdOutlineMarkEmailRead size={20} />}>
                        <Group style={{
                           alignItems: 'center',
                           alignContent: 'center'
                        }}>
                           <Text >
                              TERJAWAB
                           </Text>
                           <Text fw={"bold"}>
                              10
                           </Text>
                        </Group>
                     </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="belum">
                     <TableRequest data={data} nPage={page} />
                  </Tabs.Panel>

                  <Tabs.Panel value="terjawab">
                     <TableRequestTerjawab data={data} nPage={page} />
                  </Tabs.Panel>
               </Tabs>
            </Box>
         </Box>
      </>
   )
}