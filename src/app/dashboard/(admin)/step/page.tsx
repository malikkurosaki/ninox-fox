import { ListStep } from '@/modules/step';
import React from 'react';

function Page({ searchParams }: { searchParams: { prov: string } }) {
  return (
    <>
      <ListStep title={searchParams.prov} />
    </>
  );
}

export default Page;
