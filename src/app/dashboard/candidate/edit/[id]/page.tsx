export default function Page({ params }: { params: { id: string } }) {
    return (
        <>Edit candidate {params.id}</>
    )
}