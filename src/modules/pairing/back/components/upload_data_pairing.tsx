"use client";

import { ButtonBack } from "@/modules/_global";
import { Box, Button, Center, Menu, Modal, Stack, Text } from "@mantine/core";
import React from "react";
import { Group, rem } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { GrDocumentWindows } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { useAtom } from "jotai";
import { isModalPopularity } from "@/modules/popularity/back/val/val_modal_popularity";
import { isModalPairing } from "../val/val_modal_pairing";
import UploadDataModal from "./modal/upload_pairing_modal";

/**
 * Fungsi menampilkan halaman upload data.
  * @param {Component} props mengambil file.
 * @returns  Hasil dari upload data pairing untuk upload file yang di butuhkan
 */
export default function UploadDataPairing(props: Partial<DropzoneProps>) {
  const [openModal, setOpenModal] = useAtom(isModalPairing);
  return (
    <>
      <Stack>
        <ButtonBack />
        <Text fw={"bold"} fz={25}>
          {" "}
          UPLOAD CSV
        </Text>
      </Stack>
      <Box pt={20}>
        <Box
          style={{
            backgroundColor: "gray",
            padding: 50,
            borderRadius: 10,
          }}
        >
          <Center>
            <Box
              style={{
                border: "1px dashed white",
                borderRadius: 10,
                padding: 50,
              }}
            >
              <Dropzone
                onDrop={(files) => console.log("accepted files", files)}
                onReject={(files) => console.log("rejected files", files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                {...props}
                style={{ cursor: "pointer" }}
              >
                <Group
                  justify="center"
                  gap="xl"
                  mih={50}
                  style={{ pointerEvents: "none" }}
                >
                  <Dropzone.Accept>
                    <AiOutlineCloudUpload
                      style={{
                        width: rem(30),
                        height: rem(30),
                        color: "var(--mantine-color-blue-6)",
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <MdOutlineCancel
                      style={{
                        width: rem(30),
                        height: rem(30),
                        color: "var(--mantine-color-red-6)",
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Reject>

                  <Box>
                    <Text c={"white"} size="xl" inline>
                      UPLOAD DATA
                    </Text>
                  </Box>
                </Group>
              </Dropzone>
            </Box>
          </Center>
          <Center pt={20}>
            <Button bg={"white"} c={"dark"} onClick={() => setOpenModal(true)}>
              UPDATE
            </Button>
          </Center>
        </Box>
      </Box>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <UploadDataModal />
      </Modal>
    </>
  );
}
