import { EditMlAi, funGetOneMlAi } from "@/modules/mlai";
import _ from "lodash";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneMlAi({ id: params.id })
    return (
        <>
            <EditMlAi data={data} />
        </>
    )
}