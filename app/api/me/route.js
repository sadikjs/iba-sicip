import { auth } from "@/auth";
import { getUserByEmail } from "@/queries";
import dbConnect from "@/service/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    const session = await auth();
    if (!session?.user) {
        return new NextResponse(`You are not authenticated!`, {
            status: 401,
        });
    }
    await dbConnect();
    try {
        const user = await getUserByEmail(session?.user?.email);
        return new NextResponse(JSON.stringify(user), {
            status: 200,
        });
    } catch (err) {
        return NextResponse.json({meg:err.message},{
            status: 500,
        });
    }
}