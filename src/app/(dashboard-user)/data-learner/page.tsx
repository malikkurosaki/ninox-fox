import { ViewDataLearner, ViewDataLearner2, funGetLogRequestMlaiFront } from '@/modules/mlai';
import React from 'react';

export default async function Page() {
  const data = await funGetLogRequestMlaiFront()
  return (
    // <ViewDataLearner />
    <ViewDataLearner2 log={data}/>
  );
}
