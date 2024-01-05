import { funGetAllCandidateFront, funGetOneCandidateFront } from '@/modules/candidate';
import { ViewSwot, funGetSwotFront } from '@/modules/swot';
import React from 'react';

export default async function Page() {
  const data = await funGetSwotFront({})
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({})

  return (
    <>
      <ViewSwot data={data} candidate={can} oneCandidate={oneCandidate} />
    </>
  );
}

