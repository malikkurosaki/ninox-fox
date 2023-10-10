import React, { Component } from "react";
import { Box, Group, Text, rem } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { GrDocumentWindows } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";

/**
 * Fungsi untuk upload file.
 * @param {Component} props mengambil file.
 * @returns Hasil menampilkan data yang sudah di upload
 */
export default function UploadData(props: Partial<DropzoneProps>) {
  return (
    <>
      <Dropzone
        onDrop={(files) => console.log("accepted files", files)}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
        style={{cursor: "pointer"}}
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
          <Dropzone.Idle>
            <GrDocumentWindows
              style={{
                width: rem(30),
                height: rem(30),
                color: "var(--mantine-color-dimmed)",
              }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              UPLOAD DATA
            </Text>
          </div>
        </Group>
      </Dropzone>

    </>
  );
}
