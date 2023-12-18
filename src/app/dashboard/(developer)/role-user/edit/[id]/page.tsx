
import { EditRoleUser, funGetAllComponents, funGetOneRoleUser } from '@/modules/user';
import React from 'react';

export default async function Page({params}: {params: {id: any}}) {

  const data = await funGetOneRoleUser({id: params.id})
  const dataComponents = await funGetAllComponents()

  return (
    <EditRoleUser data={data} component={dataComponents}/>
  );
}

