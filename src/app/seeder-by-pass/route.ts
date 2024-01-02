import { funSeederComponents, funSeederUser, funSeederUserAccess, funSeederUserRole } from "@/modules/seeder";
import { NextResponse } from "next/server";

export async function GET() {
    let status = 'loading'
    const comp = await funSeederComponents()
    const role = await funSeederUserRole()
    const access = await funSeederUserAccess()
    const user = await funSeederUser()

    if (comp.success && role.success && access.success && user.success) {
        status = 'success';
    }

    return NextResponse.json({ 'message': status })
}