
import { AddRoleUser } from '@/modules/user/role';
import funGetAllComponents from '@/modules/user/role/fun/get_all_components';
import React from 'react';

export default async function Page() {
  const data = await funGetAllComponents()
  return (
    <>
      <AddRoleUser data={data} />
    </>
  );
}

