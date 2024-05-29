import { ViewDataLearner, ViewDataLearner2, funGetLogRequestMlaiFront } from '@/modules/mlai';
import Coba from '@/modules/mlai/front/view/coba';
import React from 'react';

export default async function Page() {
  const data = await funGetLogRequestMlaiFront()
  return (
    // <ViewDataLearner />
    <ViewDataLearner2 log={data} />
    // <Coba />
  );
}
