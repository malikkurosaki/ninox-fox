import { ListSwot } from '@/modules/swot';
import React from 'react';

function Page({ searchParams }: { searchParams: { prov: string } }) {
  return (
    <><ListSwot title={searchParams.prov} /></>
  );
}

export default Page;
