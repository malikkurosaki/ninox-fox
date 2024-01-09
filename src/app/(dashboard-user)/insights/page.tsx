import { funGetAudienceFront } from '@/modules/audience';
import { funGetAllCandidateFront } from '@/modules/candidate';
import { funGetLtaFront } from '@/modules/leader_trait_assessment';
import { funGetPctFront } from '@/modules/public_concern_trend';
import { ViewRegionalInsights, funGetEmotionRegionalInsight } from '@/modules/regional_insights';
import React from 'react';

export default async function Page() {
  const dataDb = await funGetEmotionRegionalInsight({})
  const can = await funGetAllCandidateFront()
  const dataAudience = await funGetAudienceFront()
  const dataPct = await funGetPctFront()
  const dataLta = await funGetLtaFront()

  return (
    <>
      <ViewRegionalInsights lta={dataLta} emotion={dataDb} candidate={can} audience={dataAudience} pct={dataPct} />
    </>
  );
}

