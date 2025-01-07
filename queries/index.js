import Register from "@/model/register-model";
import { replaceMongoIdInObject, replaceMongoIdInArray } from "@/lib/mongoIdtoStringId";
import dbConnect from "@/service/dbConnect";
export async function getAllUsers() {
    try {
        const allUsers = await Register.find({}).lean();
        return replaceMongoIdInArray(allUsers)
    } catch (error) {
        throw new Error(error)
    }
}

export async function getUserByEmail(email) {
    const user = await Register.findOne({ email: email }).select("-password").lean()
    return replaceMongoIdInObject(user)
}

export async function getRegisterById(registerId) {
    await dbConnect();
    try {
        const userId = await Register.findById(registerId).select({
            serialNo: 0,
            roll: 0,
            role: 0,
            dateOfBirth: 0,
            password: 0,
            profilePicture: 0,
            profilePublicId: 0,
            signature: 0,
            signaturePublicId: 0,
            experiedStartDateOne: 0,
            experiedEndDateOne: 0,
            experiedStartDateTwo: 0,
            experiedEndDateTwo: 0,
            experiedStartDateThree: 0,
            experiedEndDateThree: 0,
            experiedStartDateFour: 0,
            experiedEndDateFour: 0,
            createdOn: 0, modifiedOn: 0,
        }).lean();
        return replaceMongoIdInObject(userId)
    } catch (error) {
        throw new Error(error)
    }
}

export async function getProfile(prfileId) {
    try {
        console.log("getProfile queries", prfileId)
        await dbConnect();
        const latestEntry = await Register.findOne({_id:prfileId}).lean()
        if (!latestEntry) {
            return NextResponse.json(null); // Return null if no entries
        }
        const formattedData = {
            ...latestEntry,
            _id: latestEntry._id.toString(),
            dateOfBirth: latestEntry.dateOfBirth ? latestEntry.dateOfBirth.toISOString() : null,
        };
        console.log("getProfile return",formattedData)
        return replaceMongoIdInObject(formattedData)
    } catch (error) {
        throw new Error(error)
    }
}