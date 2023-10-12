import { ViewListRegion } from "@/modules/region_hot_issue";
import React from "react";

function Page({ searchParams }: { searchParams: { prov: string } }) {
  return <ViewListRegion title={searchParams.prov} />;
}

export default Page;
