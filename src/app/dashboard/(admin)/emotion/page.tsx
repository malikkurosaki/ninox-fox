import { ViewBackEmotion } from "@/modules/emotion";

export default function Page({searchParams}: {searchParams: {prov: string}}) {
    return <ViewBackEmotion title={searchParams.prov} />;
  }