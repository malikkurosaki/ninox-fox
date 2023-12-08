"use client"
import { Button, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ListConfUser() {
const router = useRouter()
  return (
    <>
    <Group justify='flex-end'>
      <Button onClick={() => router.push("/dashboard/user/add")}>Add Conf User</Button>
    </Group>
    </>
  );
}
