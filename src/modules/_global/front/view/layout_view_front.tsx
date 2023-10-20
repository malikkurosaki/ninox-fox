"use client"
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaChartLine, FaChartPie } from 'react-icons/fa';
import { GrBarChart } from 'react-icons/gr';
import { MdPersonSearch } from 'react-icons/md';
import { HiChip, HiOutlineChartSquareBar } from 'react-icons/hi';
import { usePathname, useRouter } from 'next/navigation';
import { ActionIcon, AppShell, Burger, Center, Group, NavLink, Skeleton, Text } from '@mantine/core';
import { keyBy } from 'lodash';

export default function LayoutViewFront({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const dataFront = [
    {
      key: "1",
      link: "/summary",
      icon: LuLayoutDashboard
    },
    {
      key: "2",
      link: "/popularity",
      icon: FaChartLine
    },
    {
      key: "3",
      link: "/insights",
      icon: GrBarChart
    },
    {
      key: "4",
      link: "/pairing",
      icon: MdPersonSearch
    },
    {
      key: "5",
      link: "/step",
      icon: FaChartPie
    },
    {
      key: "6",
      link: "/swot",
      icon: HiOutlineChartSquareBar
    },
    {
      key: "7",
      link: "/ml-ai",
      icon: HiChip
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
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar pl={23} pt={20}>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
          <Group justify='flex-end' style={{
            position: "absolute",
            bottom: 150,
          }}>
            {dataFront.map((item) => {
              return (
                <NavLink
                  key={item.key}
                  active={item.link === active}
                  fw={item.icon ? "dark" : "dark"}
                  label={<ActionIcon variant="subtle" color="rgba(24, 2, 87, 1)" size="xl" aria-label="Settings"><item.icon size={30} /></ActionIcon>}
                  onClick={() => {
                    router.push(item.link);
                  }}
                  color="#213555"
                  variant="filled"

                />
              )
            })} 
          </Group>

        </AppShell.Navbar>
        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
    </>
  );
}

