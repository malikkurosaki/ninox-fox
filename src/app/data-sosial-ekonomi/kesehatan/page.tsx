import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewKesehatan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>
      <ViewKesehatan prov={dataProv} />
    </>
  );
}