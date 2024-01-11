import { funGetAllCandidateFront } from '@/modules/candidate';
import { ViewPopularity, funGetPopularityToday } from '@/modules/popularity';
import React from 'react';

export default async function Page() {
  const can = await funGetAllCandidateFront()
  const dataPairingToday = await funGetPopularityToday({})

  return (
    <ViewPopularity candidate={can} pairingToday={dataPairingToday} />
  );
}

