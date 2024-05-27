import { ListRequest, funGetAllRequestMlai } from "@/modules/mlai";

export default async function Page() {
   const data = await funGetAllRequestMlai({ page: 1 })
   return (
      <>
         <ListRequest data={data.data} page={data.nPage} />
      </>
   )
}