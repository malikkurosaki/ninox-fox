import { MasterProvinceGetAll } from '@/modules/_global';
import { ViewCopyDataPairing } from '@/modules/pairing';
import React from 'react';

async function Page() {
  const prov = await MasterProvinceGetAll()

  return (
    <ViewCopyDataPairing provinsi={prov} />
  );
}

export default Page;
