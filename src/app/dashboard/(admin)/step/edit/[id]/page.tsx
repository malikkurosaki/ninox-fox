import { EditStep, funGetOneStep } from "@/modules/step";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneStep({id : params.id})
    return (
        <>
        <EditStep  data={data}/>
        </>
    )
}