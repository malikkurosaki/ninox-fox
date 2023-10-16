import { MasterKabGetByProvince } from '@/modules/_global/fun/master_kabupaten_get_by_province';
import { MasterProvinceGetAll } from '@/modules/_global/fun/master_province_get_all';
import { ListCandidates } from '@/modules/candidate';
import React from 'react';

export default async function Page({ searchParams, idProvinsi }: { searchParams: { prov: string }, idProvinsi: any }) {
  const data = await MasterProvinceGetAll()
  // const kab = await MasterKabGetByProvince({idProvinsi:0})
  return (
    <>
      <ListCandidates title={searchParams.prov} provinsi={data} />
    </>
  );
}

