"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { MdArrowForwardIos, MdOutlineSocialDistance } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, AppShellNavbar, AppShellSection, Box, Burger, Center, Divider, Grid, Group, Modal, NavLink, Skeleton, Stack, Text, Title, Tooltip } from '@mantine/core';
import _ from 'lodash';
import { useAtom } from 'jotai';
import { isModaltmp } from '../val/isModalTmp';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { DataTmpNavbarTutup } from '../components/data_tmp_navbar_tutup';
import { DataTmpNavbarBuka } from '../components/data_tmp_navbar_buka';
import { WARNA } from '@/modules/_global';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
;

export default function ViewLayoutTmp({ children }: { children: React.ReactNode }) {
  const [valOpenModal, setOpenModal] = useAtom(isModaltmp)
  const [opened, { toggle }] = useDisclosure();
  const [isOpenNavbar, setOpenNavbar] = useState(true)
  const [isNavOpt, setNavOpt] = useState({ width: 100, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })

  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  return (
    <>
      <AppShell
        navbar={isNavOpt}
      >
        {isOpenNavbar &&
          (
            <AppShellNavbar pl={23} pt={20} bg={"#0A1715"} style={{
              border: "none"
            }}>
              <Group>
                <Center>
                  <MdOutlineSocialDistance size={55} color={"white"} />
                </Center>
                <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
              </Group>
              <Group
                pt={30}
              >
                <Stack align="center" p={"xs"}>
                  {DataTmpNavbarTutup.map((v, i) => (
                    <Box key={i}>
                      <Tooltip label={_.upperCase((v.label))}>
                        <ActionIcon
                          c={v.link === active ? "#EA2222" : "white"}
                          size={30}
                          variant="subtle"
                          onClick={() => {
                            router.push(v.link);
                          }}
                        >
                          <v.icon size={35} />
                        </ActionIcon>
                      </Tooltip>
                    </Box>
                  ))}

                </Stack>
              </Group>
              <Group
                style={{
                  position: "absolute",
                  bottom: 30,
                }}
                pl={10}
              >
                <Group pb={40}>
                  <ActionIcon onClick={() => {
                    setNavOpt({ width: 300, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                    setOpenNavbar(false)
                  }} variant='subtle' c={"white"}>
                    <MdArrowForwardIos size={30} />
                  </ActionIcon>
                </Group>
                <Group justify='center' >
                  <ActionIcon variant='subtle' onClick={() => router.push("/summary")}>
                    <IoArrowBackCircleOutline size={40} color={"white"} />
                  </ActionIcon>
                </Group>
              </Group>
            </AppShellNavbar>
          )
        }
        {!isOpenNavbar &&
          <AppShellNavbar pt={20} bg={"#0A1715"} style={{
            border: "none"
          }}>
            <Group justify="flex-end" pr={20} pt={30}>
              <ActionIcon onClick={() => {
                setNavOpt({ width: 100, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                setOpenNavbar(true)
              }} variant='subtle' c={"white"}>
                <AiOutlineClose size={30} />
              </ActionIcon>
            </Group>
            {DataTmpNavbarBuka.map((item) => {
              return (
                <Box key={item.key} m={5} mt={5}>
                  <NavLink
                    active
                    label={active === item.link ? (
                      <Box>
                        <Title order={5} onClick={() => router.push(item.link)}>
                          {item.label}
                        </Title>
                        <Grid pt={5}>
                          <Grid.Col span={3}>
                            <Divider color={"#EA2222"} size="lg" />
                          </Grid.Col>
                        </Grid>
                      </Box>
                    ) : (
                      <Box>
                        <Text onClick={() => router.push(item.link)}>
                          {item.label}
                        </Text>

                      </Box>
                    )
                    }
                    onClick={() => {
                      router.push(item.link);
                    }}
                    c={"white"}
                    variant="subtle"
                  />
                </Box>
              )
            })}
            <Group
              style={{
                position: "absolute",
                bottom: 30,
                cursor: 'pointer',
              }}
            >
              <Group justify='center' pl={20} onClick={() => router.push("/summary")}>
                <ActionIcon variant='subtle'>
                  <IoArrowBackCircleOutline size={40} color={"white"} />
                </ActionIcon>
                <Text c={"white"}>BACK TO NINOX</Text>
              </Group>
            </Group>
          </AppShellNavbar>
        }
        <AppShell.Main bg={"#03363D"}>
          <Box p={20}>
            {children}
          </Box>
        </AppShell.Main>
      </AppShell>
      {/* <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalLogoutUser />
      </Modal> */}
    </>
  );
}

