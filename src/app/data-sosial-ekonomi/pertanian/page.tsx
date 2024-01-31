import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewPertanian } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>
      <ViewPertanian prov={dataProv}/>
    </>
  );
}

