"use client"
import { Box, Button, Group, Text } from '@mantine/core';
import React from 'react';
import TableRoleUser from '../components/table_role_user';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { isModalRoleUser } from '../val/val_role_user';

export default function ListRoleUser() {
  const router = useRouter()
  return (
    <>
    <Text fw={"bold"}>ROLE USER</Text>
    <Box>
      <Group justify='flex-end'>
        <Button bg={"gray"} onClick={() => router.push("/dashboard/role-user/add")} >ADD ROLE USER</Button>
      </Group>
      <Box>
        <TableRoleUser/>
      </Box>
    </Box>
    </>
  );
}

