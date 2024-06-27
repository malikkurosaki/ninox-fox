import { MasterProvinceGetAll } from "@/modules/_global";
import { ViewCopyData } from "@/modules/emotion";
import React from "react";

async function Page() {
  const prov = await MasterProvinceGetAll()

  return <ViewCopyData provinsi={prov} />;
}

export default Page;
