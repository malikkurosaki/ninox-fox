'use client'
import { Box, Group, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi"

/**
 * Fungsi untuk menambahkan component back, yang digunakan untuk kembali ke page sebelumnya.
 * @param {string} to - Link/alamat yang dituju, parameter ini boleh undefined.
 * @returns {component} Component button back, yg apabila di klik akan ke halaman sesuai dg parameter (apabila parameter undefined maka akan kembali ke halaman sebelumnya).
 */

export default function ButtonBack({ to }: { to?: string }) {
    const router = useRouter()
    function toPage() {
        if (to === undefined) {
            router.back()
        } else {
            router.push(to)
        }
    }
    return (
        <>
            <Group>
                <Box onClick={toPage} style={{ textDecoration: "none" }}>
                    <Group style={{ cursor: "pointer" }}>
                        <BiArrowBack size="20" />
                        <Text fz={15} fw={700} color="dark.9">
                            Kembali
                        </Text>
                    </Group>
                </Box>
            </Group>
        </>
    )
}