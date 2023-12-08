
import { ListRoleUser } from '@/modules/user/role';
import funGetAllUserRole from '@/modules/user/role/fun/get_all_role';
import React from 'react';

export default async function Page() {
  const data = await funGetAllUserRole()
  return (
    <>
      <ListRoleUser data={data} />
    </>
  );
}
