'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
   ActionIcon,
   Badge,
   Box,
   Center,
   Collapse,
   Group,
   Stack,
   Table,
   Text,
} from "@mantine/core";
import { CiRead, CiUnread } from "react-icons/ci";
import { MdOutlineQuestionAnswer } from "react-icons/md";

export default function ComponentTableRequest({ v, i }: { v: any; i: any }) {
   const open = useState(false);
   const router = useRouter();


   return (
      <>
         <Table.Tbody key={i}>
            <Table.Tr>
               <Table.Td>{i + 1}</Table.Td>
               <Table.Td>{v.date}</Table.Td>
               <Table.Td>{v.name}</Table.Td>
               <Table.Td>
                  {
                     (v.status == 1)
                        ? <Badge color="blue">Terjawab</Badge>
                        : <Badge color="yellow">Belum Terjawab</Badge>
                  }
               </Table.Td>
               <Table.Td>
                  <Center>
                     <Stack>
                        <Group>
                           <ActionIcon
                              variant="transparent"
                              color="rgba(5, 128, 23, 1)"
                              size="xl"
                              aria-label="Edit"
                              onClick={() => open[1](!open[0])}
                           >
                              {open[0] ? <CiRead size={20} /> : <CiUnread size={20} />}
                           </ActionIcon>
                        </Group>
                     </Stack>
                     <ActionIcon
                        variant="transparent"
                        color="rgba(5, 128, 23, 1)"
                        size="xl"
                        aria-label="Edit"
                        onClick={() => {
                           if (v.status == 1) {
                              router.push("/dashboard/ml-ai/edit/" + v.idMlAi)
                           } else {
                              router.push("/dashboard/ml-ai/add?req=" + v.id)
                           }

                        }}
                     >
                        <MdOutlineQuestionAnswer size={20} />
                     </ActionIcon>
                  </Center>
               </Table.Td>
            </Table.Tr>
            <Table.Tr>
               <Table.Td colSpan={5}>
                  <Collapse
                     in={open[0]}
                     transitionDuration={500}
                     transitionTimingFunction="linear"
                  >
                     <Box
                        style={{
                           backgroundColor: "gray",
                           padding: 20,
                           borderRadius: 10,
                        }}
                     >
                        <Text c={"white"} fw={"bold"} fz={20} mb={10}>
                           Request
                        </Text>
                        <Stack c={'white'}>
                           <Box dangerouslySetInnerHTML={{ __html: v.request }} />
                        </Stack>
                        {
                           (v.status == 1)
                              ? <>
                                 <Text c={"white"} fw={"bold"} fz={20} mb={10}>
                                    Response
                                 </Text>
                                 <Stack c={'white'}>
                                    <Box dangerouslySetInnerHTML={{ __html: v.response }} />
                                 </Stack>
                              </>
                              : <></>
                        }
                        {/* <Text style={{ fontSize: '16', color: "white" }} dangerouslySetInnerHTML={RubahHTML(v.content)} /> */}
                        {/* <Text c={"white"}>
                  <TextAnimation
                    phrases={[...v.content.split('\n')]}
                    typingSpeed={0}
                    backspaceDelay={0}
                    eraseDelay={0}
                    timeComplete={0}
                    errorProbability={0}
                    eraseOnComplete={false}
                    isSecure={false}
                  />
                </Text> */}
                     </Box>
                  </Collapse>
               </Table.Td>
            </Table.Tr>
         </Table.Tbody>
      </>
   );
}
