import { ViewPublic } from "@/modules/public_concern_trend";
import React from "react";

function Page({searchParams}: {searchParams: {prov: string}}) {
  return <ViewPublic title={searchParams.prov} />;
}

export default Page;
