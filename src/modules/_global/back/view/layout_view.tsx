"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Skeleton,
  UnstyledButton,
} from "@mantine/core";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * Fungsi untuk menampilkan template dashsboard admin.
 * @returns component untuk template dashboard
 */

export default function LayoutView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  const dataDashboard = [
    {
      key: "md1",
      link: "/dashboard",
      label: "EMOTION EDITOR",
    },
    {
      key: "md2",
      link: "/dashboard/popularity",
      label: "POPULARITY",
    },
    {
      key: "md3",
      link: "/dashboard/pairing",
      label: "REGION DATA PAIRING",
    },
  ];

  const dataRegion = [
    {
      key: "md4",
      link: "/dashboard/audience",
      label: "AUDIENCE",
    },
    {
      key: "md5",
      link: "/dashboard/public-concern-trend",
      label: "PUBLIC CONCERNS TRENDS",
    },
    {
      key: "md6",
      link: "/dashboard/leader_trait_assessment",
      label: "LEADER TRAIT ASSESSMENT",
    },
    {
      key: "md7",
      link: "/dashboard/region-hot-issue",
      label: "REGION HOT ISSUE",
    },
  ];

  const dataDua = [
    {
      key: "md4",
      link: "/dashboard/step",
      label: "STEP",
    },
    {
      key: "md5",
      link: "/dashboard/swot",
      label: "SWOT",
    },
    {
      key: "md6",
      link: "/dashboard/ml-ai",
      label: "ML - AI",
    },
    {
      key: "md7",
      link: "/dashboard/candidate",
      label: "CANDIDATE",
    },
  ];

  const router = useRouter();

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <UnstyledButton onClick={() => router.push("/")} fz={25} fw={700}>
              NINOX
            </UnstyledButton>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" pb={30}>
          {dataDashboard.map((item) => {
            return (
              <NavLink
                key={item.key}
                c={item.label ? "#61677A" : "dark"}
                fw={item.label ? "bolder" : "normal"}
                label={item.label}
                onClick={() => {
                  router.push(item.link);
                }}
              />
            );
          })}
          <NavLink
            label="REGIONAL VALUE EDITOR"
            childrenOffset={28}
            c={"#61677A"}
            fw={"bolder"}
          >
            {dataRegion.map((item) => {
              return (
                <NavLink
                  key={item.key}
                  c={item.label ? "#61677A" : "dark"}
                  fw={item.label ? "bolder" : "normal"}
                  label={item.label}
                  onClick={() => {
                    router.push(item.link);
                  }}
                />
              );
            })}
          </NavLink>
          {dataDua.map((item) => {
            return (
              <NavLink
                key={item.key}
                c={item.label ? "#61677A" : "dark"}
                fw={item.label ? "bolder" : "normal"}
                label={item.label}
                onClick={() => {
                  router.push(item.link);
                }}
              />
            );
          })}
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
