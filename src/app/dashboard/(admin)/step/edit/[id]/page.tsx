import { EditStep } from "@/modules/step";
import funGetOneStep from "@/modules/step/back/fun/fun_get_one_step";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneStep({id : params.id})
    return (
        <>
        <EditStep  data={data}/>
        </>
    )
}