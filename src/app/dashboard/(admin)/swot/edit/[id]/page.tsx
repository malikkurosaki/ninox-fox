import { EditSwot, funGetOneSwot } from "@/modules/swot";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneSwot({ id: params.id })
    return (
        <>
            <EditSwot data={data} />
        </>
    )
}