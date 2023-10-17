'use client'
import { ButtonBack } from '@/modules/_global';
import { Box, Button, Group, Stack, Text, Title, rem } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import papa from 'papaparse'
import { useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import { GrDocumentCsv } from 'react-icons/gr';
import { MdCancelPresentation } from 'react-icons/md';
import toast from 'react-simple-toasts';
import { funUploadLeader } from '../fun/fun_upload_leader';


/**
 * Fungsi untuk upload leader.
 * @returns {Component} hasil untuk menampilkan upload leader
 */
export function ViewUploadLeader() {
  const [json, setJson] = useState()
  async function onpload(data : any) {
    const res = await funUploadLeader(data)
    if (res.success) return toast(res.message)
  }

  const [dataUpload, setDataUplaod] = useState()

  return (
    <>
      <Stack>
        <ButtonBack />
      </Stack>
      <Stack p={"md"}>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 20,
            borderRadius: 10
          }}
        >
          <Text fw={"bold"} c={"white"} mb={20}>UPLOAD DATA CSV</Text>
          <Dropzone
            style={{
              border: "1px dashed",
              color: "white",
              borderRadius: 10
            }}
            onDrop={async (files: any) => {
              const csv_file = Buffer.from(await files[0].arrayBuffer()).toString()
              const { data } = papa.parse(csv_file, { header: true, })
              setJson(data as any)
              // console.log('data', data);
            }}
            onReject={(files: any) => {
              toast("success")

            }}
            maxSize={3 * 1024 ** 2}
            accept={['text/csv']}
          >
            <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <AiOutlineUpload
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <MdCancelPresentation
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <GrDocumentCsv
                  style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" inline mt={7} >
                  Attach as many files as you like, each file should not exceed 5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          <Box style={{
            borderRadius: 10,
            paddingTop: 20
          }}>
            {json && <Stack bg={"dark"} style={{ borderRadius: 10, }} c={"white"} p={"md"}>
              <Title order={3}>Result</Title>
              <pre>
                {JSON.stringify(json, null, 2)}
              </pre>
            </Stack>}
          </Box>
        </Box>
      </Stack>
    </>
  );
}

