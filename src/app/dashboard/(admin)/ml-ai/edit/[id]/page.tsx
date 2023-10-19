import { MasterKabGetByProvince, MasterProvinceGetAll } from "@/modules/_global";
import { funGetCandidateActiveByArea } from "@/modules/candidate";
import { EditMlAi } from "@/modules/mlai";
import funGetOneMlAi from "@/modules/mlai/back/fun/fun_get_one_mlai";
import _ from "lodash";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneMlAi({ id: params.id })
    console.log(data)
    return (
        <>
            <EditMlAi data={data} />
        </>
    )
}