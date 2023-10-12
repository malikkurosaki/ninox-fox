import { ViewPairing } from "@/modules/pairing";
import React from "react";

function Page({searchParams}: {searchParams: {prov: string}}) {
  return <ViewPairing title={searchParams.prov} />;
}

export default Page;
