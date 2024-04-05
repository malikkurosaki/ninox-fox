import { funGetAllCandidateFront, funGetOneCandidateFront, funGetUserDefaultFront } from '@/modules/candidate';
import { ViewSwot, funGetSwotFront } from '@/modules/swot';
import React from 'react';

export default async function Page() {
  const canDef = await funGetUserDefaultFront()
  const data = await funGetSwotFront({ candidate: canDef.idCandidate })
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({ candidate: canDef.idCandidate })

  return (
    <>
      <ViewSwot data={data} candidate={can} oneCandidate={oneCandidate} />
    </>
  );
}

