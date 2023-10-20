import { EditSwot } from "@/modules/swot";
import funGetOneSwot from "@/modules/swot/back/fun/fun_get_one_swot";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneSwot({ id: params.id })
    console.log(data)
    return (
        <>
            <EditSwot data={data} />
        </>
    )
}