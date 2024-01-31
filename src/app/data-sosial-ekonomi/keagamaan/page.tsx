import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewKeagamaan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>
      <ViewKeagamaan prov={dataProv} />
    </>
  );
}

