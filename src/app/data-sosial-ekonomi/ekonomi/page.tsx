import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewEkonomi } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>
      <ViewEkonomi prov={dataProv} />
    </>
  );
}

