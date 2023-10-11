import { ListCandidates } from '@/modules/candidate';
import React from 'react';

function Page({searchParams}:{searchParams:{prov:string}}) {
  return (
    <>
      <ListCandidates title={searchParams.prov}/>
    </>
  );
}

export default Page;
