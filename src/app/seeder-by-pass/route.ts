import { funSeederComponents, funSeederDesa, funSeederKabupaten, funSeederKecamatan, funSeederProvinsi, funSeederUser, funSeederUserAccess, funSeederUserRole } from "@/modules/seeder";
import funSeederUserArea from "@/modules/seeder/fun/fun_user_area";
import { NextResponse } from "next/server";

export async function GET() {
    let status = 'loading'
    const prov = await funSeederProvinsi()
    const kab = await funSeederKabupaten()
    const kec = await funSeederKecamatan()
    const kel = await funSeederDesa()
    const comp = await funSeederComponents()
    const role = await funSeederUserRole()
    const access = await funSeederUserAccess()
    const user = await funSeederUser()
    const userArea = await funSeederUserArea()

    if (comp.success && role.success && access.success && user.success && prov.success && kab.success && kec.success && kel.success && userArea.success) {
        status = 'success';
    }

    return NextResponse.json({ 'message': status })
}