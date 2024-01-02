import { funGetOneCandidateFront } from '@/modules/candidate';
import funGetAllCandidateFront from '@/modules/candidate/front/fun/get_all_candidate_front';
import { ViewMlAi, funGetMlAiFront } from '@/modules/mlai';
import React from 'react';

export default async function Page() {
const data = await funGetMlAiFront({})
const can = await funGetAllCandidateFront()
const oneCandidate = await funGetOneCandidateFront({candidate: "clqdehlfg000d3vyyx3t1uzyh"})
  return (
    <ViewMlAi data={data} candidate={can} oneCandidate={oneCandidate}/>
  );
}

