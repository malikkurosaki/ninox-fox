import { funGetAllCandidateFront, funGetOneCandidateFront } from '@/modules/candidate';
import { ViewMlAi, funGetMlAiFront } from '@/modules/mlai';
import React from 'react';

export default async function Page() {

  const data = await funGetMlAiFront({})
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({})

  return (
    <ViewMlAi data={data} candidate={can} oneCandidate={oneCandidate} />
  );
}

