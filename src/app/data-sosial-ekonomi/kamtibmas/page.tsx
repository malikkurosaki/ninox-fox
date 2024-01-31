import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewKamtibmas } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>

      <ViewKamtibmas prov={dataProv} />
    </>
  );
}
