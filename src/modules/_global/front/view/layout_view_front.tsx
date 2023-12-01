"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaChartLine, FaChartPie } from 'react-icons/fa';
import { GrBarChart } from 'react-icons/gr';
import { MdArrowForwardIos, MdPersonSearch } from 'react-icons/md';
import { HiChip, HiOutlineChartSquareBar } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, AppShellNavbar, AppShellSection, Box, Burger, Button, Center, Divider, Grid, Group, NavLink, Skeleton, Stack, Text, Title, Tooltip } from '@mantine/core';
import _, { keyBy } from 'lodash';
import { DataNavbarTutup } from '../components/data_navbar_tutup';
import { GlobalDark } from '../components/dark';
import { WARNA } from '../../fun/WARNA';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Truculenta } from 'next/font/google';
import { AiOutlineClose } from 'react-icons/ai';
import { DataNavbarBuka } from '../components/data_navbar_buka';

export default function LayoutViewFront({ children }: { children: React.ReactNode }) {
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
                          c={v.link === active ? WARNA.merah : "white"}
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
                  <ActionIcon variant='subtle'>
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
                            <Divider color={WARNA.merah} size="lg" />
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
              <Group justify='center' pl={20}  >
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
    </>
  );
}

