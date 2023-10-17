import { ViewListLeader } from '@/modules/leader_trait_assessment';
import { funDownLeader } from '@/modules/leader_trait_assessment/back/fun/fun_download_leader';
import { funUploadLeader } from '@/modules/leader_trait_assessment/back/fun/fun_upload_leader';
import React from 'react';

export default async function Page({searchParams}: {searchParams: {prov: string}}) {
  const datadown =  await funDownLeader()
  // const uploadDat = await funUploadLeader(data)
  return (
    <ViewListLeader title={searchParams.prov} data={datadown} 
    // uploadDat={uploadDat}
    />
  );
}

