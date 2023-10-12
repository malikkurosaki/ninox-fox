import { EditCandidate } from "@/modules/candidate";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <>
            <EditCandidate data={[]} />
        </>
    )
}