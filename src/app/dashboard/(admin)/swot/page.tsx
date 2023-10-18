import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';
import { ListSwot } from '@/modules/swot';
import _ from 'lodash';
import React from 'react';

export default async function Page({ searchParams }: { searchParams: { prov: string, city: string } }) {
  const dataSwot = {
    idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city))
  }

  const pro = await MasterProvinceGetAll()
  const kab = await MasterKabGetByProvince({ idProvinsi: dataSwot.idProvinsi })
  return (
    <>
      <ListSwot params={dataSwot} provinsi={pro} kabupaten={kab} />
    </>
  );
}

