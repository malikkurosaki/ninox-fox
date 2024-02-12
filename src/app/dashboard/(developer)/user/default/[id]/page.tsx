import { funGetUserAreaProvinsi } from "@/modules/_global";
import { DefaultConfUser } from "@/modules/user";

export default async function Page({ params }: { params: { id: any } }) {
    const dataAreaPro = await funGetUserAreaProvinsi({ idUser: params.id })

    return (
        <>
            <DefaultConfUser provinsi={dataAreaPro} idUser={params.id} />
        </>
    )
}