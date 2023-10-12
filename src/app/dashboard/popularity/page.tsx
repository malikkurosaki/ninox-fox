import { ViewPopularity } from "@/modules/popularity";
import React from "react";

function Page({searchParams}: {searchParams: {prov: string}}) {
  return (
    <>
      <ViewPopularity title={searchParams.prov} />
    </>
  );
}

export default Page;
