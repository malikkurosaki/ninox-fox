import { funGetAllCandidateFront } from '@/modules/candidate';
import { ViewPopularity, funGetPopularityToday, funGetRateChart } from '@/modules/popularity';
import moment from 'moment';
import React from 'react';

export default async function Page() {
  const can = await funGetAllCandidateFront()
  const dataPairingToday = await funGetPopularityToday({})
  const dataRateChart = await funGetRateChart({
    candidate1: dataPairingToday.pairingCandidate.idCandidate1,
    candidate2: dataPairingToday.pairingCandidate.idCandidate2,
    startDate: moment(new Date()).subtract(7, "days").format("YYYY-MM-DD"),
    endDate: moment(new Date()).format("YYYY-MM-DD")
  })

  return (
    <ViewPopularity candidate={can} pairingToday={dataPairingToday} chartRate={dataRateChart} />
  );
}

