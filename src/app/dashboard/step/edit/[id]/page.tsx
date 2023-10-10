export default function Page({ params }: { params: { id: string } }) {
    return (
        <>Edit Step {params.id}</>
    )
}