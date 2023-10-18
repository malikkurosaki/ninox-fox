import { ListMlAi } from '@/modules/mlai';
import React from 'react';
import _ from 'lodash';
import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';

export default async function Page({ searchParams }: { searchParams: { prov: string, city: string } }) {

  const dataMlai = {
    idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city))
  }

  const pro = await MasterProvinceGetAll()
  const kab = await MasterKabGetByProvince({idProvinsi: dataMlai.idProvinsi})
  return (
    <>
      <ListMlAi params={dataMlai} provinsi={pro} kabupaten={kab} />
    </>
  );
}
