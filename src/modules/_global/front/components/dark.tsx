"use client"
import cx from 'clsx';
import { useMantineColorScheme, useComputedColorScheme, Group, useMantineTheme, rem, Switch } from '@mantine/core';
import { CiSun } from 'react-icons/ci';
import { IoMdMoon } from "react-icons/io";

export function GlobalDark() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const theme = useMantineTheme();

  const sunIcon = (
    <CiSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IoMdMoon
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.dark[4]}
    />
  );

  return (
    <Group justify="center">
      <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon}  onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}  />
    </Group>
  );
}