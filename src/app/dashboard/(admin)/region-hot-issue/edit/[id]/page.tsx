import { ViewEditAdminMlai, funGetOneRhi } from "@/modules/region_hot_issue";

export default async function Page({ params }: { params: { id: any } }) {
    const dataOne = await funGetOneRhi({ id: params.id });

    return (
        <><ViewEditAdminMlai data={dataOne} /></>
    )
}