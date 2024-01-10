import { funGetAudienceFront } from '@/modules/audience';
import { funGetOneCandidateFront, funGetUserDefaultFront } from '@/modules/candidate';
import { ViewSummary, funGetEmotionChart, funGetEmotionPersen, funGetEmotionTable } from '@/modules/emotion';
import { funGetPairingCandidateSummary } from '@/modules/pairing';
import moment from 'moment';
import React from 'react';

export default async function Page() {
  const can = await funGetUserDefaultFront()
  const oneCandidate = await funGetOneCandidateFront({ candidate: can.idCandidate })
  const dataEmotion = await funGetEmotionTable({ candidate: oneCandidate?.id })
  const dataPersen = await funGetEmotionPersen({ candidate: oneCandidate?.id })
  const dataChart = await funGetEmotionChart({ candidate: oneCandidate?.id, startDate: moment(new Date()).subtract(7, "days").format("YYYY-MM-DD"), endDate: moment(new Date()).format("YYYY-MM-DD") })
  const dataLocked = await funGetAudienceFront()
  const dataPairingCandidate = await funGetPairingCandidateSummary()
  // const dataPairingChart

  return (
    <ViewSummary oneCandidate={oneCandidate} emoTable={dataEmotion} emoPersen={dataPersen} emoChart={dataChart} locked={dataLocked} />
  );
}
