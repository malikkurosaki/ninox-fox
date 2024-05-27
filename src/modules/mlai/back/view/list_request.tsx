'use client'
import { Box, Stack, Text } from "@mantine/core"
import TableRequest from "../component/table_request"

export default function ListRequest({ data, page }: { data: any, page: any }) {
   return (
      <>
         <Stack>
            <Text fw={"bold"}>Data Request</Text>
         </Stack>

         <Box mt={30}>
            <Box
               style={{
                  backgroundColor: "gray",
                  padding: 20,
                  borderRadius: 10,
               }}
            >
               <TableRequest data={data} nPage={page} />
            </Box>
         </Box>
      </>
   )
}