import { ListMlAi, funGetAllMlAi } from '@/modules/mlai';
import React from 'react';
import _ from 'lodash';
import { MasterKabGetByProvince, MasterProvinceGetAll } from '@/modules/_global';

export default async function Page({ searchParams }: { searchParams: { prov: string, city: string, date: any } }) {

  const dataMlai = {
    idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city)),
    tingkat: (_.isNaN(Number(searchParams.city)) ? 1 : 2),
    date: (_.isUndefined(searchParams.date) ? null : searchParams.date)
  }

  const pro = await MasterProvinceGetAll()
  const kab = await MasterKabGetByProvince({ idProvinsi: dataMlai.idProvinsi })
  const dataDB = await funGetAllMlAi({ find: dataMlai, page: 1 })
  return (
    <>
      <ListMlAi params={dataMlai} provinsi={pro} kabupaten={kab} datatable={dataDB} />
    </>
  );
}
