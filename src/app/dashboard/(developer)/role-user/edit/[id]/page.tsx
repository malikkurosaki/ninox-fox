
import { EditRoleUser } from '@/modules/user/role';
import funGetAllComponents from '@/modules/user/role/fun/get_all_components';
import funGetOneRoleUser from '@/modules/user/role/fun/get_one_role_user';
import React from 'react';

export default async function Page({params}: {params: {id: any}}) {

  const data = await funGetOneRoleUser({id: params.id})
  const dataComponents = await funGetAllComponents()

  return (
    <EditRoleUser data={data} component={dataComponents}/>
  );
}

