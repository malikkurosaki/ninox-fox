"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaChartLine, FaChartPie } from 'react-icons/fa';
import { GrBarChart } from 'react-icons/gr';
import { MdPersonSearch } from 'react-icons/md';
import { HiChip, HiOutlineChartSquareBar } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, Box, Burger, Center, Group, NavLink, Skeleton, Stack, Text, Tooltip } from '@mantine/core';
import _, { keyBy } from 'lodash';

export default function LayoutViewFront({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const dataFront = [
    {
      key: "1",
      link: "/summary",
      icon: LuLayoutDashboard,
      label: "Summary"
    },
    {
      key: "2",
      link: "/popularity",
      icon: FaChartLine,
      label: "Popularity"
    },
    {
      key: "3",
      link: "/insights",
      icon: HiOutlineChartSquareBar,
      label: "Insights"
    },
    {
      key: "4",
      link: "/pairing",
      icon: MdPersonSearch,
      label: "Pairing"
    },
    {
      key: "5",
      link: "/step",
      icon: FaChartPie,
      label: "Step"
    },
    {
      key: "6",
      link: "/swot",
      icon: HiOutlineChartSquareBar,
      label: "Swot"
    },
    {
      key: "7",
      link: "/ml-ai",
      icon: HiChip,
      label: "Ml-ai"
    },

  ]

  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  useShallowEffect(() => {
    setActive(pathname);
  });
  return (
    <>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{ width: 100, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header bg={"dark"}>
          <Group h="100%" px="md">
            <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar pl={23} pt={20} bg={"dark"} style={{
          border: "none"
        }}>
          <Group>
            <Text fw={"bold"} c={"white"}>NINOX</Text>
            <Burger opened={opened} color="rgba(255, 255, 255, 1)" onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
          <Group justify='flex-end' style={{
            position: "absolute",
            bottom: 130,
            // bottom: "50"
          }}>
            <Stack align="center" p={"xs"}>
              {dataFront.map((v, i) => (
                <Box key={i}>
                  <Tooltip label={_.upperCase((v.label))}>
                    <ActionIcon
                      c={v.link === active ? "white" : "violet"}
                      size={32}
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

        </AppShell.Navbar>
        <AppShell.Main bg={"gray.1"}>
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
}

