import { funGetAreaByDefault } from '@/modules/_global';
import { funGetAllCandidateFront } from '@/modules/candidate';
import { ViewPairingFront, funGetPairingRegional } from '@/modules/pairing';
import React from 'react';

export default async function Page() {
  const can = await funGetAllCandidateFront()
  const dataPairing = await funGetPairingRegional({})
  const daerah = await funGetAreaByDefault()

  return (
    <ViewPairingFront candidate={can} data={dataPairing} area={daerah} />
  );
}
