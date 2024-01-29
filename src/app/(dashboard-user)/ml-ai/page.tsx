import { funGetAllCandidateFront, funGetOneCandidateFront, funGetUserDefaultFront } from '@/modules/candidate';
import { ViewMlAi, funGetMlAiFront } from '@/modules/mlai';
import React from 'react';

export default async function Page() {
  const canDef = await funGetUserDefaultFront()
  const data = await funGetMlAiFront({ candidate: canDef.idCandidate })
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({ candidate: canDef.idCandidate })

  return (
    <ViewMlAi data={data} candidate={can} oneCandidate={oneCandidate} />
  );
}

