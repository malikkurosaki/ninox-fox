import { AddCandidate } from "@/modules/candidate";
import _ from "lodash";

export default async function Page({ searchParams }: { searchParams: { prov: any, city: any } }) {
    // const findData = {
    //     idProvinsi: (_.isNaN(Number(searchParams.prov)) ? 0 : Number(searchParams.prov)),
    //     idKabkot: (_.isNaN(Number(searchParams.city)) ? 0 : Number(searchParams.city)),
    //     tingkat: (_.isNaN(Number(searchParams.city)) ? 1 : 2)
    //   }

    return (
        <>
            <AddCandidate/>
        </>
    )
}