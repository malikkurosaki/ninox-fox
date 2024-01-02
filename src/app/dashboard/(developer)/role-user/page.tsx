
import { ListRoleUser, funGetAllUserRole } from '@/modules/user';
import React from 'react';

export default async function Page() {
  const data = await funGetAllUserRole()
  return (
    <>
      <ListRoleUser data={data} />
    </>
  );
}
