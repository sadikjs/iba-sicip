"use server"
import { signIn } from "@/auth"
import Register from "@/model/register-model"
import { revalidatePath } from "next/cache";
export async function loginCredentials(formData){
    try {
        const response = await signIn("credentials", {
            email: formData.get("email"), 
            password: formData.get("password"), 
            redirect: false
        })
        return response
    } catch (error) {
        throw new Error(error)
    }
}

export async function updateCourse(courseId, dataToUpdate) {
    try {
        await Register.findByIdAndUpdate(courseId, dataToUpdate);
        revalidatePath("/dashboard")
    } catch(e){
        throw new Error(e);
    }
}