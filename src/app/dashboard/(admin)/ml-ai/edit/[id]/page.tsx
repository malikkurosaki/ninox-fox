import { EditMlAi } from "@/modules/mlai";
import funGetOneMlAi from "@/modules/mlai/back/fun/fun_get_one_mlai";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneMlAi({id: params.id})
    return (
        <>
            <EditMlAi data={data}/>
        </>
    )
}