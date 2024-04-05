import { funGetAudienceFront } from '@/modules/audience';
import { funGetAllCandidateFront, funGetOneCandidateFront, funGetUserDefaultFront } from '@/modules/candidate';
import { funGetLtaFront } from '@/modules/leader_trait_assessment';
import { funGetPctFront } from '@/modules/public_concern_trend';
import { ViewRegionalInsights, funGetEmotionRegionalInsight } from '@/modules/regional_insights';
import React from 'react';

export default async function Page() {
  const canDef = await funGetUserDefaultFront()
  const dataDb = await funGetEmotionRegionalInsight({})
  const can = await funGetAllCandidateFront()
  const dataAudience = await funGetAudienceFront()
  const dataPct = await funGetPctFront()
  const dataLta = await funGetLtaFront()
  const oneCandidate = await funGetOneCandidateFront({ candidate: canDef.idCandidate })

  return (
    <>
      <ViewRegionalInsights oneCandidate={oneCandidate} lta={dataLta} emotion={dataDb} candidate={can} audience={dataAudience} pct={dataPct} />
    </>
  );
}

