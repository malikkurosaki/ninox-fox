"use client"
import { WARNA } from '@/modules/_global/fun/WARNA';
import { BackgroundImage, Box, Button, Flex, Grid, Group, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { LuShieldCheck } from 'react-icons/lu';

export default function ViewLogin() {

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
            h={{ base: 300, sm: 400 }}
          />
          <Box
            style={{
              zIndex: 1000
            }}
          >
            <Box
            >
              <Text fw={"bold"} fz={30} c={"white"}>EXISTING MEMBER</Text>
              <Text fz={20} c={"white"}>Welcome Back!</Text>
            </Box>
            <Stack pt={25}>
              <TextInput
                label={<Text fz={14} c={"white"}>Username</Text>}
              />
              <PasswordInput
                label={<Text fz={14} c={"white"}>Password</Text>}
              />
              <Group pt={10} justify='space-between'>
                <Group>
                  <LuShieldCheck size={20} color={"white"} />
                  <Text c={"white"}>Secure Access</Text>
                </Group>
                <Text c={"white"}>Secure Access</Text>
              </Group>
              <Button
                mt={10}
                mb={10}
                fullWidth
                bg={"white"}
                c={"#005B41"}
              >
                Login
              </Button>
            </Stack>
          </Box>

        </Flex>

      </BackgroundImage>
    </>
  );
}
