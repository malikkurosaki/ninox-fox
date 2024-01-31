import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewPendidikan } from '@/modules/temporary';
import React from 'react';

export default async function Page() {
  const dataProv = await MasterProvinceGetAll()

  return (
    <>
      <ViewPendidikan prov={dataProv} />
    </>
  );
}
