'use client'

import { Alert, Box, Button, Grid, Text } from "@mantine/core"


/**
 * Fungsi untuk menampilkan modal konfirmasi edit kandidat.
 * @returns {component} Modal konfirmasi edit kandidat.
 */


export default function ModalEditandidate() {
    return (
        <>
            <Box>
                <Alert color="gray" variant="outline">
                    <Text fw={700} ta={"center"} mb={20} mt={20}>
                        ARE YOU SURE TO EDIT CANDIDATE?
                    </Text>
                    <Grid>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                            // onClick={() => setOpenProfile(false)}
                            >
                                NO
                            </Button>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Button
                                radius={10}
                                color="gray.7"
                                fullWidth
                            // onClick={() => { editProfile() }}
                            >
                                YES
                            </Button>
                        </Grid.Col>
                    </Grid>
                </Alert>
            </Box>
        </>
    )
}