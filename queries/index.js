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
            password: 0,
            profilePicture: 0,
            profilePublicId: 0,
            signature: 0,
            signaturePublicId: 0,
            createdOn: 0, modifiedOn: 0,
        }).lean();
        return replaceMongoIdInObject(userId)
    } catch (error) {
        throw new Error(error)
    }
}


export const getStudentLength = async () => {
    try {
        const images = await Register.find({});
        return ({ image: images, total: images.length })
    } catch (error) {
        throw new Error(error)
    }
}