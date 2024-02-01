export default function Page({ params }: { params: { kategori: any } }) {
    return (
        <>
            Upload {params.kategori}
        </>
    )
}