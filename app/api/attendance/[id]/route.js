import ExamCenter from "@/model/exam-center";
import dbConnect from "@/service/dbConnect";
import Register from "@/model/register-model";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const userId = (await params).id
        await dbConnect();
        const user = await ExamCenter.findById(userId).populate({
            path: "students",
            model: Register
        }).lean()
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({data: user}, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}