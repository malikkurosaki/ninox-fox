import { ListMlAi } from '@/modules/mlai';
import React from 'react';
import _ from 'lodash';

function Page({ searchParams }: { searchParams: { prov: string, city: string } }) {
  return (
    <>
      <ListMlAi title={searchParams.prov} />
    </>
  );
}

export default Page;
