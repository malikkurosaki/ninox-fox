
import { AddRoleUser, funGetAllComponents } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const data = await funGetAllComponents()
  return (
    <>
      <AddRoleUser data={data} />
    </>
  );
}

