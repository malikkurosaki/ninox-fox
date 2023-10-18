import { EditCandidate, funGetOneCandidate } from "@/modules/candidate";

export default async function Page({ params }: { params: { id: string } }) {
    const data = await funGetOneCandidate({ id: params.id });
    return (
        <>
            <EditCandidate data={data} />
        </>
    )
}