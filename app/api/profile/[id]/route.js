import Register from "@/model/register-model";
import dbConnect from "@/service/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const userId = (await params).id;
    await dbConnect();
    const user = await Register.findById(userId).lean();
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const profileData = {
      ...user,
      dateOfBirth: user.dateOfBirth ? user.dateOfBirth.toISOString() : null,
      experiedStartDateOne: user.experiedStartDateOne
        ? user.experiedStartDateOne.toISOString()
        : null,
      experiedEndDateOne: user.experiedEndDateOne
        ? user.experiedEndDateOne.toISOString()
        : null,
      experiedStartDateTwo: user.experiedStartDateTwo
        ? user.experiedStartDateTwo.toISOString()
        : null,
      experiedEndDateTwo: user.experiedEndDateTwo
        ? user.experiedEndDateTwo.toISOString()
        : null,
      experiedStartDateThree: user.experiedStartDateThree
        ? user.experiedStartDateThree.toISOString()
        : null,
      experiedEndDateThree: user.experiedEndDateThree
        ? user.experiedEndDateThree.toISOString()
        : null,
      experiedStartDateFour: user.experiedStartDateFour
        ? user.experiedStartDateFour.toISOString()
        : null,
      experiedEndDateFour: user.experiedEndDateFour
        ? user.experiedEndDateFour.toISOString()
        : null,
    };
    return NextResponse.json(profileData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
