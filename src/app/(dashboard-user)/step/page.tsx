import { funGetAllCandidateFront, funGetOneCandidateFront } from '@/modules/candidate';
import { ViewStep, funGetStepFront } from '@/modules/step';
import React from 'react';

export default async function Page() {
  const data = await funGetStepFront({})
  const can = await funGetAllCandidateFront()
  const oneCandidate = await funGetOneCandidateFront({})

  return (
    <ViewStep data={data} candidate={can} oneCandidate={oneCandidate} />
  );
}
