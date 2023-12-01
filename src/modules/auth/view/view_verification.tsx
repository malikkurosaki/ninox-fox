"use client"
import { Anchor, BackgroundImage, Box, Button, Flex, Grid, Group, PasswordInput, PinInput, Stack, Text, TextInput } from '@mantine/core';
import { url } from 'inspector';
import React, { useState } from 'react';
import { CiBoxList } from 'react-icons/ci';
import { URL } from 'url';
import classes from "..//components/input.module.css"
import { LuShieldCheck } from 'react-icons/lu';
import { WARNA } from '@/modules/_global/fun/WARNA';

export default function ViewVerification() {

  return (
    <>
      <BackgroundImage src='/bgfull.png' h={"100vh"} pos={"fixed"}>
        <Flex justify={"center"} align={"center"} style={{
          height: "100vh"
        }} >
          <Box style={{
            backgroundColor: "#000000",
            border: `2px solid navy`,
            padding: 30,
            borderRadius: 10,
            position: "fixed",
            opacity: 0.7,
            zIndex: 0
          }}
            w={{ base: 300, sm: 400 }}
            h={{ base: 300, sm: 320 }}
          />
          <Box
            style={{
              zIndex: 1000
            }}
          >
            <Grid grow>
              <Grid.Col>
                <Text fw={"bold"} fz={25} c={"white"} ta={"center"}>ENTER VERIFICATION CODE</Text>
              </Grid.Col>
            </Grid>
            <Stack pt={20}>
              <Group justify="center" mt={30}>
                <PinInput type={"number"} size='md' />
              </Group>
              <Button
                mt={30}
                fullWidth
                bg={"white"}
                c={"#005B41"}
              >
                Submit
              </Button>
              <Group justify="center" >
                <Text fz={12} c="white">
                  Didnt receive a code ? {""}
                  <Anchor c="white"
                    fz={12}
                  >
                    Resend
                  </Anchor>
                </Text>
              </Group>
            </Stack>

          </Box>
        </Flex>

      </BackgroundImage>
    </>
  );
}
