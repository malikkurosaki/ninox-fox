import funGetAllCandidateFront from '@/modules/candidate/front/fun/get_all_candidate_front';
import { ViewRegionalInsights } from '@/modules/regional_insights';
import React from 'react';

export default async function Page() {
  // const dCandidate = await funGetAllCandidateFront()

  // console.log(dCandidate)

  return (
    <>
      <ViewRegionalInsights />
    </>
  );
}

