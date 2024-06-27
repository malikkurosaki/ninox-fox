import { funGetAllCandidateFront, funGetOneCandidateFront, funGetUserDefaultFront } from '@/modules/candidate';
import { ViewStep, funGetStepFront } from '@/modules/step';
import React from 'react';

export default async function Page() {
  const canDef = await funGetUserDefaultFront()
  const data = await funGetStepFront({ candidate: canDef.idCandidate })
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({ candidate: canDef.idCandidate })

  return (
    <ViewStep data={data} candidate={can} oneCandidate={oneCandidate} />
  );
}
