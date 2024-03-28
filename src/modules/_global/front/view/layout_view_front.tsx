"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, AppShellNavbar, AppShellSection, Box, Burger, Divider, Drawer, Grid, Group, Indicator, Modal, NavLink, Skeleton, Stack, Text, Title, Tooltip, useMantineColorScheme } from '@mantine/core';
import _ from 'lodash';
import { DataNavbarTutup } from '../components/data_navbar_tutup';
import { WARNA } from '../../fun/WARNA';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { DataNavbarBuka } from '../components/data_navbar_buka';
import { useAtom } from 'jotai';
import { isModalLayout } from '../val/isModallayout';
import ModalLogoutUser from '../components/modal_logout_user';
import { IoMdClose, IoMdNotificationsOutline } from 'react-icons/io';
import { isDrawer } from '../val/isDrawer';
import DrawerNotifikasi from '../components/drawer_notifikasi';
import { IoClose } from 'react-icons/io5';
import { funGetAllNotifications } from '../..';


export default function LayoutViewFront({ notif, children }: { notif: number, children: React.ReactNode }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalLayout)
  const [valOpenDrawer, setOpenDrawer] = useAtom(isDrawer)
  const [opened, { toggle }] = useDisclosure();
  const [isOpenNavbar, setOpenNavbar] = useState(true)
  const [isNavOpt, setNavOpt] = useState({ width: 100, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
  const [isListNotif, setListNotif] = useState<any>([])

  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  async function OpenModal() {
    const loadNotif = await funGetAllNotifications()
    setListNotif(loadNotif)
    setOpenDrawer(true)
  }

  function CloseModal() {
    setOpenDrawer(false)
  }

  return (
    <>
      <AppShell
        navbar={isNavOpt}
      >
        {isOpenNavbar &&
          (
            <AppShellNavbar pl={23} pt={20} bg={"#000000"} style={{
              border: "none"
            }}>
              <Group>
                <Text fw={"bold"} c={"white"}>NINOX</Text>
                <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
              </Group>
              <Group
                // justify='flex-end' style={{
                //   position: "absolute",
                //   bottom: 130,
                //   // bottom: "50"
                // }}
                pt={30}
              >
                <Stack align="center" p={"xs"}>
                  {DataNavbarTutup.map((v, i) => (
                    <Box key={i}>
                      <Tooltip label={_.upperCase((v.label))}>
                        <ActionIcon
                          c={v.link === active ? "#CF0A0A" : "white"}
                          size={30}
                          variant="subtle"
                          onClick={() => {
                            router.push(v.link);
                          }}
                        >
                          <v.icon size={32} />
                        </ActionIcon>
                      </Tooltip>
                    </Box>
                  ))}
                  {
                    notif > 0 ? (
                      <Indicator inline processing color="red" size={12} label={notif}>
                        <ActionIcon variant="subtle" c={"white"} onClick={OpenModal}>
                          <IoMdNotificationsOutline size={30} />
                        </ActionIcon>
                      </Indicator>
                    ) : (
                      <ActionIcon variant="subtle" c={"white"} onClick={OpenModal}>
                        <IoMdNotificationsOutline size={30} />
                      </ActionIcon>
                    )
                  }

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
                    setNavOpt({ width: 250, breakpoint: 'sm', collapsed: { mobile: isOpenNavbar } })
                    setOpenNavbar(false)
                  }} variant='subtle' c={"white"}>
                    <MdArrowForwardIos size={30} />
                  </ActionIcon>
                </Group>
                <Group justify='center' >
                  <ActionIcon variant='subtle' onClick={() => setOpenModal(true)}>
                    <RiLogoutCircleRLine size={30} color={"white"} />
                  </ActionIcon>
                </Group>
              </Group>
            </AppShellNavbar>
          )
        }
        {!isOpenNavbar &&
          <AppShellNavbar pt={20} bg={"#000000"} style={{
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
            {DataNavbarBuka.map((item) => {
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
                            <Divider color={"#CF0A0A"} size="lg" />
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
            <Box m={5} mt={5} ml={18}>
              <Box onClick={OpenModal} style={{ cursor: "pointer" }}>
                {
                  notif > 0 ? (
                    <Indicator inline processing color="red" size={12} label={notif}>
                      <Text c={"white"} >
                        NOTIFIKASI
                      </Text>
                    </Indicator>
                  ) : (
                    <Text c={"white"} >
                      NOTIFIKASI
                    </Text>
                  )
                }

              </Box>
            </Box>

            <Group
              style={{
                position: "absolute",
                bottom: 30,
                cursor: 'pointer',
              }}
            >
              <Group justify='center' pl={20} onClick={() => setOpenModal(true)}>
                <ActionIcon variant='subtle'>
                  <RiLogoutCircleRLine size={30} color={"white"} />
                </ActionIcon>
                <Text c={"white"}>LOGOUT</Text>
              </Group>
            </Group>
          </AppShellNavbar>
        }
        <AppShell.Main bg={WARNA.bgGradasi}>
          <Box p={20}>
            {children}
          </Box>
        </AppShell.Main>
      </AppShell>
      <Modal
        opened={valOpenModal}
        onClose={() => setOpenModal(false)}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalLogoutUser />
      </Modal>

      {/* <Drawer opened={valOpenDrawer}
        onClose={() => setOpenDrawer(false)}
        position='right'
        closeOnClickOutside={false}
        withCloseButton={false}
        transitionProps={{ transition: 'slide-left', duration: 150, timingFunction: 'linear' }}
        title={
          <Group gap={"md"}>
            <ActionIcon variant='subtle' onClick={CloseModal}>
              <IoClose size={30} color={"white"} /></ActionIcon>
            <Text>NOTIFIKASI</Text>
          </Group>
        }
      >
        <DrawerNotifikasi data={isListNotif}/>
      </Drawer> */}
       {valOpenDrawer &&
        <>
          <Box style={{
            transition: 'ease-in-out',
            transitionDuration: 'revert',
            transitionTimingFunction: 'linear',
            
          }}>
          <Box bg={WARNA.ungu} style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100%",
            width: '30%',
            zIndex: 700,
            // transitionDelay: 'initial'
          }}>
            <Box p={10}>
              <Group>
                <ActionIcon variant='subtle' onClick={CloseModal}>
                  <IoClose size={30} color={"white"} />
                </ActionIcon>
                <Text c={"white"}>NOTIFIKASI</Text>
              </Group>
              <DrawerNotifikasi data={isListNotif}/>
            </Box>
          </Box>
          </Box>
          <Box bg={'#000000'} p={20} style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "70%",
            height: "100%",
            zIndex: 500,
            opacity: '0.5',
          }} onClick={CloseModal}>

          </Box>


        </>
      }
    </>
  );
}

