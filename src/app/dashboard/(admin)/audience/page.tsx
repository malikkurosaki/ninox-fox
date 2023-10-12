import { ViewAudience } from "@/modules/audience";
import React from "react";

function Page({ searchParams }: { searchParams: { prov: string } }) {
  return <ViewAudience title={searchParams.prov} />;
}

export default Page;
