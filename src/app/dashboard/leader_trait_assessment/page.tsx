import { ViewListLeader } from '@/modules/leader_trait_assessment';
import React from 'react';

function Page({searchParams}: {searchParams: {prov: string}}) {
  return (
    <ViewListLeader title={searchParams.prov}/>
  );
}

export default Page;
